import NotFoundPage from "@/pages/NotFoundPage.js";

class RouterOutlet extends HTMLElement {
  private static _instance: RouterOutlet;

  public static get instance(): RouterOutlet {
    return this._instance;
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
    await this._updateUI(urlObject);
    history.pushState({}, "", urlObject);
  }

  private _findRoute(searchParams: URLSearchParams): IRoute | null {
    const page = searchParams.get("page") ?? "";
    return this._routes.find((r) => r.page === page) ?? null;
  }

  private async _updateUI({ searchParams }: URL): Promise<void> {
    const route = this._findRoute(searchParams);
    const component = route?.component ?? NotFoundPage;
    const pageProps = Object.fromEntries([...searchParams]);
    this.replaceChildren(await component(pageProps));
  }

  private async _updateCurrentUI(): Promise<void> {
    await this._updateUI(new URL(location.href));
  }
}

customElements.define("router-outlet", RouterOutlet);

export function Router({ children }: {
  children?: IRoute[];
}): RouterOutlet {
  return new RouterOutlet(children ?? []);
}

export function Route(props: IRoute): IRoute {
  return props;
}

export async function navigate(url: string | URL): Promise<void> {
  await RouterOutlet.instance.navigate(url);
}

export function path(page: string): string {
  return `${location.pathname}?page=${page}`;
}

type IRoute = {
  page: string;
  component: Component;
};

type Component = (params: object) => Node | Promise<Node>;