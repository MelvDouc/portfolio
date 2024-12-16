import Dropdown from "@/components/Dropdown/Dropdown.jsx";
import cssClasses from "./Nav.module.scss";
import { path } from "@/core/Router.js";

export default function Nav() {
  return (
    <nav className={cssClasses.nav}>
      <ul>
        <li>
          <a href={path("home")} className={cssClasses.navLink}>Home</a>
        </li>
        <li>
          <Dropdown>
            <a href={path("projects")} className={cssClasses.navLink}>Projects</a>
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
          <a href={path("cv")} className={cssClasses.navLink}>CV</a>
        </li>
      </ul>
    </nav>
  );
}