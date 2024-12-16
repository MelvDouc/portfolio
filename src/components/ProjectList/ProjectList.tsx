import Link from "@/components/Link.jsx";
import Trl from "@/components/Translatable/Trl.jsx";
import { path } from "@/services/router.service.js";
import cssClasses from "./ProjectList.module.scss";

export default function ProjectList() {
  return (
    <ul className={cssClasses.ProjectList}>
      <li>
        <Link href={path("calculator")}>
          <Trl fr="Calculatrice" en="Calculator" />
        </Link>
      </li>
      <li>
        <Link href={path("connect-4")}>
          <Trl fr="Puissance 4" en="Connect 4" />
        </Link>
      </li>
      <li>
        <Link href={path("minesweeper")}>
          <Trl fr="Démineur" en="Minesweeper" />
        </Link>
      </li>
      <li>
        <Link href={path("password-generator")}>
          <Trl fr="Générateur de mot de passe" en="Password generator" />
        </Link>
      </li>
      <li>
        <Link href={path("snake")}>Snake</Link>
      </li>
      <li>
        <a href="https://melvdouc.github.io/swisschess-ui/">
          <Trl fr="Tournois d'échecs suisses" en="Swiss chess tournament app" />
        </a>
      </li>
    </ul>
  );
}