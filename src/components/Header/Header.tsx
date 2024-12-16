import Nav from "@/components/Nav/Nav.jsx";
import Logo from "@/assets/favicon.png";
import cssClasses from "./Header.module.scss";
import { path } from "@/services/router.service.js";
import Trl from "@/components/Translatable/Trl.jsx";
import Link from "@/components/Link.jsx";

export default function Header() {
  return (
    <header className={cssClasses.header}>
      <section className={cssClasses.headerTop}>
        <article>
          <Link href={path("home")} style={{ display: "block" }}>
            <img
              src={Logo}
              alt="Logo"
              className={cssClasses.logo}
            />
          </Link>
        </article>
        <article className={cssClasses.headerTitles}>
          <p><strong>Melvin Doucet</strong></p>
          <p><Trl en="Full-stack web development" fr="Développement web full-stack" /></p>
        </article>
      </section>
      <section>
        <Nav />
      </section>
    </header>
  );
}