import ownPicture from "@/assets/melvin-doucet.jpg";
import cssClasses from "./PicContainer.module.scss";

export default function PicContainer(): HTMLElement {
  return (
    <article className={cssClasses.PicContainer}>
      <img src={ownPicture} alt="Melvin Doucet" />
    </article>
  );
}