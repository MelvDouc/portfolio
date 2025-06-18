import ResumeList from "@/components/Résumé/Bottom/RésuméList/ResumeList.jsx";
import Trl from "@/components/Translatable/Trl.jsx";
import cssClasses from "./Hobbies.module.scss";

export default function Hobbies(): HTMLElement {
  return (
    <article className={cssClasses.Hobbies}>
      <h3><Trl fr="Loisirs" en="Hobbies" /></h3>
      <ResumeList>
        <li><Trl fr="Volontariat avec Étud'ETChantiers depuis plus de dix ans." en="Volunteering with Étud'ETChantiers for over ten years." /></li>
        <li><Trl fr="Échecs avec les clubs de Thionville et Dommeldange" en="Chess with the clubs of Thionville and Dommeldange" /></li>
        <li><Trl fr="Lecture" en="Reading" /></li>
      </ResumeList>
    </article>
  );
}