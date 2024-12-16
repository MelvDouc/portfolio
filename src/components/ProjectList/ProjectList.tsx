import { path } from "@/core/Router.js";
import cssClasses from "./ProjectList.module.scss";

export default function ProjectList() {
  return (
    <ul className={cssClasses.ProjectList}>
      <li><a href={path("calculator")}>Calculator</a></li>
      <li><a href={path("connect-4")}>Connect 4</a></li>
      <li><a href={path("minesweeper")}>Minesweeper</a></li>
      <li><a href={path("password-generator")}>Password generator</a></li>
      <li><a href={path("snake")}>Snake</a></li>
    </ul>
  );
}