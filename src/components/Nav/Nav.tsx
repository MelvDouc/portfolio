import Dropdown from "@/components/Dropdown/Dropdown.jsx";
import cssClasses from "./Nav.module.scss";
import { path } from "@/core/Router.js";
import { languageObs } from "@/utils/translations/translations.service.js";
import type { Language } from "@/types.js";

export default function Nav() {
  const handleLanguageChange = (e: Event) => {
    languageObs.value = (e.target as HTMLSelectElement).value as Language;
  };

  return (
    <nav className={cssClasses.nav}>
      <ul>
        <li>
          <a href={path("home")} className={cssClasses.navLink} data-trl="nav-home-link"></a>
        </li>
        <li>
          <Dropdown>
            <a href={path("projects")} className={cssClasses.navLink} data-trl="nav-projects-link"></a>
            <div className={cssClasses.projectLinks}>
              <a href={path("calculator")}>Calculator</a>
              <a href={path("connect-4")}>Connect 4</a>
              <a href={path("minesweeper")}>Minesweeper</a>
              <a href={path("password-generator")}>Password generator</a>
              <a href={path("snake")}>Snake</a>
            </div>
          </Dropdown>
        </li>
        <li>
          <a href={path("cv")} className={cssClasses.navLink} data-trl="nav-résumé-link"></a>
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