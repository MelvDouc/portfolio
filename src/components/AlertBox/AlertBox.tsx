import "./AlertBox.scss";

export default class AlertBox extends HTMLElement {
  static create(props: {
    message: string | Node;
    type?: ButtonColor;
    /**
     * Will run after the element has been removed.
     */
    handleClose?: VoidFunction;
  }) {
    document.body.prepend(
      new AlertBox(props)
    );
  }

  constructor({ message, type, handleClose }: Parameters<typeof AlertBox["create"]>[0]) {
    super();

    const quit = () => {
      this.remove();
      handleClose && handleClose();
    };

    const handleEnter = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;
      e.preventDefault();
      quit();
      document.removeEventListener("keydown", handleEnter);
    };

    this.append(
      <div className="alert-box__main">
        <p>{message}</p>
        <button
          className={{
            btn: true,
            "btn-primary": !type || type === "primary",
            "btn-danger": type === "danger",
          }}
          type="button"
          onclick={quit}
        >OK</button>
      </div>
    );
    document.addEventListener("keydown", handleEnter);
  }
}

customElements.define("alert-box", AlertBox);


type ButtonColor = "primary" | "danger";