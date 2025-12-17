import ResumeList from "@/components/Résumé/Bottom/RésuméList/ResumeList.jsx";
import Trl from "@/components/Translatable/Trl.jsx";
import cssClasses from "./Hobbies.module.scss";

export default function Hobbies() {
  return (
    <article className={cssClasses.Hobbies}>
      <h3><Trl fr="Loisirs" en="Hobbies" /></h3>
      <ResumeList>
        <li><Trl fr="Volontariat avec Étud'ETChantiers." en="Volunteering with Étud'ETChantiers." /></li>
        <li><Trl fr="Échecs en club" en="Chess" /></li>
        <li><Trl fr="Lecture" en="Reading" /></li>
      </ResumeList>
    </article>
  );
}