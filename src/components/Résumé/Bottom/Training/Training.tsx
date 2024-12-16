import ResumeDate from "@/components/Résumé/Bottom/RésuméDate/ResumeDate.jsx";
import ResumeList from "@/components/Résumé/Bottom/RésuméList/ResumeList.jsx";
import Trl from "@/components/Translatable/Trl.jsx";
import cssClasses from "./Training.module.scss";

export default function Training(): HTMLElement {
  return (
    <article className={cssClasses.Training}>
      <h3><Trl fr="Formation" en="Training" /></h3>
      <ResumeList col2>
        <li>
          <ResumeDate value="2020-2021" /> <Trl fr="Titre professionnel de développeur web et web mobile" en="Web Development Bachelor's degree equivalency" />
          <ul>
            <li><Trl fr="école WebForce3 Strasbourg" en="WebForce3 School, Strasbourg" /></li>
          </ul>
        </li>
        <li>
          <ResumeDate value="2011-2013" /> <Trl fr="Niveau BTS assistant de gestion" en="Administrative Assistant (sandwich course)" />
          <ul>
            <li><Trl fr="IFA à Metz" en="French Institute of Affairs, Metz" /></li>
          </ul>
        </li>
        <li>
          <ResumeDate value="2009-2011" /> <Trl fr="Licence LEA" en="Applied Foreign Languages Bachelor's" />
          <ul>
            <li><Trl fr="anglais-allemand-japonais" en="French - German - Japanese" /></li>
            <li><Trl fr="université du Saulcy à Metz" en="Saulcy University, Metz" /></li>
          </ul>
        </li>
        <li>
          <ResumeDate value="2009" /> <Trl fr="Bac L" en="Literary baccalauréat" />
          <ul>
            <li><Trl fr="15,15 de moyenne (mention Bien)" en="15.15/20 average score" /></li>
          </ul>
        </li>
      </ResumeList>
    </article>
  );
}