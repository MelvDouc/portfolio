import ResumeList from "@/components/Résumé/Bottom/RésuméList/ResumeList.jsx";
import Trl from "@/components/Translatable/Trl.jsx";
import cssClasses from "./Languages.module.scss";

export default function Languages() {
  return (
    <article className={cssClasses.Languages}>
      <h3><Trl fr="Langues" en="Languages" /></h3>
      <ResumeList>
        <li><Trl fr="français natif" en="native French" /></li>
        <li><Trl fr="anglais courant" en="proficient English" /></li>
        <li><Trl fr="allemand correct" en="decent German" /></li>
        <li><Trl fr="japonais basique" en="basic Japanese" /></li>
        <li><Trl fr="chinois mandarin basique" en="basic Mandarin Chinese" /></li>
      </ResumeList>
    </article>
  );
}