import NotFoundPage from "@/pages/NotFoundPage.js";

class RouteComponent extends HTMLElement implements IRoute {
  public readonly page: string;
  public readonly component: Component;

  public constructor(page: string, component: Component) {
    super();
    this.page = page;
    this.component = component;
  }
}

customElements.define("route-component", RouteComponent);

class RouterOutlet extends HTMLElement {
  private static _instance: RouterOutlet;

  public static get instance(): RouterOutlet {
    return this._instance;
  }

  private static getParams(searchStr: string): Record<string, string> {
    const searchParams = new URLSearchParams(searchStr);
    return Object.fromEntries([...searchParams]);
  }

  private readonly _routes: IRoute[];

  constructor(routes: IRoute[]) {
    super();
    this._routes = routes;
    this.style.display = "contents";
    RouterOutlet._instance = this;
  }

  async connectedCallback(): Promise<void> {
    window.addEventListener("popstate", async () => {
      await this._updateCurrentUI();
    });
    await this._updateCurrentUI();
  }

  public async navigate(url: string | URL): Promise<void> {
    const urlObject = url instanceof URL ? url : new URL(url);
    const params = RouterOutlet.getParams(urlObject.search);
    await this._updateUI(params);
    history.pushState({}, "", urlObject);
  }

  private _findRoute(page: string): IRoute | null {
    return this._routes.find((r) => r.page === page) ?? null;
  }

  private async _updateUI(params: Record<string, string>): Promise<void> {
    const route = this._findRoute(params.page ?? "");
    const component = route?.component ?? NotFoundPage;
    this.replaceChildren(await component(params));
  }

  private async _updateCurrentUI(): Promise<void> {
    const searchParams = RouterOutlet.getParams(location.search);
    await this._updateUI(searchParams);
  }
}

customElements.define("router-outlet", RouterOutlet);

export function Router({ children }: {
  children: Element[];
}): RouterOutlet {
  const routes = children
    .flat(Infinity)
    .filter((item) => item instanceof RouteComponent);
  return new RouterOutlet(routes);
}

export function Route({ page, component }: IRoute): RouteComponent {
  return new RouteComponent(page, component);
}

export async function navigate(url: string | URL): Promise<void> {
  await RouterOutlet.instance.navigate(url);
}

export function path(page: string): string {
  return `${location.pathname}?page=${page}`;
}

type Component = (params: object) => Node | Promise<Node>;

interface IRoute {
  readonly page: string;
  readonly component: Component;
}