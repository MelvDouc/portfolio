import ResumeList from "@/components/Résumé/Bottom/RésuméList/ResumeList.jsx";
import Trl from "@/components/Translatable/Trl.jsx";
import cssClasses from "./Exp.module.scss";
import ResumeDate from "@/components/Résumé/Bottom/RésuméDate/ResumeDate.jsx";

export default function Exp() {
  return (
    <article className={cssClasses.Exp}>
      <h3><Trl fr="Expérience" en="Experience" /></h3>
      <ResumeList>
        <li><ResumeDate value="2025" /> <Trl fr="Stage dev Modelias" en="Dev internship with Modelias" /></li>
        <li>
          <div><ResumeDate value="2022-2023" /> <Trl fr="Développeur web full-stack" en="Full-stack web developer" /></div>
          <ul>
            <li>Sfeir Luxembourg</li>
          </ul>
        </li>
        <li><ResumeDate value={2019} /> <Trl fr="Réceptionniste dans un hôtel F1" en="Receptionist in an F1 hotel" /></li>
        <li><ResumeDate value="2016-2017" /> <Trl fr="Agent d'accueil dans une location de vélos" en="Bicycle rental clerk" /></li>
        <li><ResumeDate value="2013-2016" /> <Trl fr="Travaux divers" en="Odd jobs" /></li>
        <li>
          <div><ResumeDate value="2011-2013" /> <Trl fr="Assistant de gestion PME-PMI" en="Administrative Assistant" /></div>
          <ul>
            <li>
              <Trl fr="Foyer de jeunes travailleurs Etap'Habitat à Metz (alternance)" en="Etap'Habitat Young Workers' Hostel, Metz, France (sandwich course)" />
            </li>
          </ul>
        </li>
      </ResumeList>
    </article>
  );
}