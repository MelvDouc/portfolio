import { navigate } from "@/services/router.service.js";

export default function Link({ $init: _init, children, ...props }: JSX.IntrinsicElements["a"]): HTMLAnchorElement {
  const $init = (element: HTMLAnchorElement) => {
    element.addEventListener("click", async (e) => {
      e.preventDefault();
      await navigate(element.href);
      _init && _init(element);
    });
  };

  return (
    <a $init={$init} {...props}>{children}</a>
  );
}