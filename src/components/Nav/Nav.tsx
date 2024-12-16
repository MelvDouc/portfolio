import Dropdown from "@/components/Dropdown/Dropdown.jsx";
import cssClasses from "./Nav.module.scss";
import { path } from "@/core/Router.js";
import { languageObs } from "@/core/translations.js";
import type { Language } from "@/types.js";
import Trl from "@/components/Translatable/Trl.jsx";

export default function Nav() {
  const handleLanguageChange = (e: Event) => {
    languageObs.value = (e.target as HTMLSelectElement).value as Language;
  };

  return (
    <nav className={cssClasses.nav}>
      <ul>
        <li>
          <a href={path("home")} className={cssClasses.navLink}>
            <Trl en="home" fr="accueil" />
          </a>
        </li>
        <li>
          <Dropdown>
            <a href={path("projects")} className={cssClasses.navLink}><Trl en="projects" fr="projets" /></a>
            <div className={cssClasses.projectLinks}>
              <a href={path("calculator")}><Trl en="Calculator" fr="Calculatrice" /></a>
              <a href={path("connect-4")}><Trl en="Connect 4" fr="Puissance 4" /></a>
              <a href={path("minesweeper")}><Trl en="Minesweeper" fr="Démineur" /></a>
              <a href={path("password-generator")}><Trl en="Password generator" fr="Générateur de mot de passe" /></a>
              <a href={path("snake")}>Snake</a>
            </div>
          </Dropdown>
        </li>
        <li>
          <a href={path("cv")} className={cssClasses.navLink}><Trl en="Résumé" fr="CV" /></a>
        </li>
        <li>
          <select className={cssClasses.LanguageSelect} onchange={handleLanguageChange}>
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}