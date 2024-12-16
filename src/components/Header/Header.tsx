import Nav from "@/components/Nav/Nav.jsx";
import Logo from "@/assets/favicon.png";
import cssClasses from "./Header.module.scss";
import { path } from "@/core/Router.js";

export default function Header() {
  return (
    <header className={cssClasses.header}>
      <section className={cssClasses.headerTop}>
        <article>
          <a href={path("home")} style={{ display: "block" }}>
            <img
              src={Logo}
              alt="Logo"
              className={cssClasses.logo}
            />
          </a>
        </article>
        <article className={cssClasses.headerTitles}>
          <p><strong>Melvin Doucet</strong></p>
          <p>Full-Stack Web Development</p>
        </article>
      </section>
      <section>
        <Nav />
      </section>
    </header>
  );
}