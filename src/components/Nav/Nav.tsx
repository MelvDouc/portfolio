import Dropdown from "@/components/Dropdown/Dropdown.jsx";
import Link from "@/components/Link.jsx";
import Trl from "@/components/Translatable/Trl.jsx";
import { path } from "@/services/router.service.js";
import { getLanguage, setLanguage } from "@/services/translations.service.js";
import type { Language } from "@/types.js";

import cssClasses from "./Nav.module.scss";

export default function Nav() {
  const handleLanguageChange = (e: Event) => {
    setLanguage((e.target as HTMLSelectElement).value as Language);
  };
  const currentLanguage = getLanguage();

  return (
    <nav className={cssClasses.nav}>
      <ul>
        <li>
          <Link href={path("home")} className={cssClasses.navLink}>
            <Trl en="home" fr="accueil" />
          </Link>
        </li>
        <li>
          <Dropdown
            head={
              <Link href={path("projects")} className={cssClasses.navLink}>
                <Trl en="projects" fr="projets" />
              </Link>
            }
            body={
              <div className={cssClasses.projectLinks}>
                <Link href={path("calculator")}><Trl en="Calculator" fr="Calculatrice" /></Link>
                <Link href={path("connect-4")}><Trl en="Connect 4" fr="Puissance 4" /></Link>
                <Link href={path("minesweeper")}><Trl en="Minesweeper" fr="Démineur" /></Link>
                <Link href={path("password-generator")}><Trl en="Password generator" fr="Générateur de mot de passe" /></Link>
                <Link href={path("snake")}>Snake</Link>
              </div>
            }
          />

        </li>
        <li>
          <Link href={path("cv")} className={cssClasses.navLink}><Trl en="Résumé" fr="CV" /></Link>
        </li>
        <li>
          <select className={cssClasses.LanguageSelect} onchange={handleLanguageChange}>
            <option value="fr" selected={currentLanguage === "fr"}>FR</option>
            <option value="en" selected={currentLanguage === "en"}>EN</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}