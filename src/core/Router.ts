import NotFoundPage from "@/pages/NotFoundPage.js";
import { languageObs } from "@/core/translations.js";

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
      await this._navigateToCurrent();
    });
    document.addEventListener("click", async (e) => {
      await this._handleAnchorNav(e);
    });
    await this._navigateToCurrent();
  }

  public async navigate(url: string): Promise<void> {
    await this._navigate(new URL(url));
  }

  private _findRoute(searchParams: URLSearchParams): IRoute | null {
    const page = searchParams.get("page") ?? "home";
    return this._routes.find((r) => r.page === page) ?? null;
  }

  private async _updateUI(component: () => Node | Promise<Node>): Promise<void> {
    this.replaceChildren(await component());
  }

  private async _navigate({ searchParams }: URL): Promise<void> {
    const route = this._findRoute(searchParams);
    const component = route
      ? () => route.component(Object.fromEntries([...searchParams]))
      : NotFoundPage;
    await this._updateUI(component);
    languageObs.notify();
  }

  private async _navigateToCurrent(): Promise<void> {
    await this._navigate(new URL(location.href));
  }

  private async _handleAnchorNav(e: Event): Promise<void> {
    const { target } = e;

    if (!(target instanceof HTMLElement))
      return;

    const anchor = target instanceof HTMLAnchorElement
      ? target
      : target.closest("a");

    if (!anchor)
      return;

    const url = new URL(anchor.href);

    if (url.origin !== location.origin)
      return;

    e.preventDefault();
    await this._navigate(url);
    history.pushState({}, "", url);
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

export async function navigate(url: string): Promise<void> {
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