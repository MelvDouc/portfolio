import favicon from "@/assets/favicon.png";
import githubLogo from "@/assets/github-logo.png";
import ownPicture from "@/assets/melvin-doucet.jpg";
import SkillList from "@/components/Résumé/SkillList/SkillList.jsx";
import cssClasses from "./Bottom.module.scss";
import Trl from "@/components/Translatable/Trl.jsx";

export default function Bottom(): HTMLElement {
  const website = "https://melvdouc.github.io/static-website/";

  return (
    <section className={cssClasses.Bottom}>
      <article className={cssClasses.PicContainer}>
        <img src={ownPicture} alt="Melvin Doucet" />
      </article>

      <article className={cssClasses.ContactDetail}>
        <h3><Trl fr="Coordonnées" en="Contact Detail" /></h3>
        <dl>
          <dt>☎️</dt>
          <dd>+33.6.09.21.97.14</dd>
          <dt>@</dt>
          <dd>melv.douc@gmail.com</dd>
          <dt><img src={githubLogo} alt="GitHub Logo" /></dt>
          <dd><a href="https://github.com/MelvDouc">https://github.com/MelvDouc</a></dd>
          <dt><img src={favicon} alt="Logo" /></dt>
          <dd><a href={website}>{website}</a></dd>
          <dt>✉️</dt>
          <dd>
            <address>
              <p>43 rue de l'ancien hôpital</p>
              <p>57100 Thionville - France</p>
            </address>
          </dd>
        </dl>
      </article>

      <article className={cssClasses.Hobbies}>
        <h3><Trl fr="Loisirs" en="Hobbies" /></h3>
        <ul className={cssClasses.List}>
          <li><Trl fr="Volontariat avec Étud'ETChantiers depuis plus de dix ans." en="Volunteering with Étud'ETChantiers for over ten years." /></li>
          <li><Trl fr="Échecs avec les clubs de Thionville et Dommeldange" en="Chess with the clubs of Thionville and Dommeldange" /></li>
          <li><Trl fr="Lecture" en="Reading" /></li>
        </ul>
      </article>

      <article className={cssClasses.Skills}>
        <h3><Trl fr="Compétences" en="Skills" /></h3>
        <SkillList />
      </article>

      <article className={cssClasses.Exp}>
        <h3><Trl fr="Expérience" en="Experience" /></h3>
        <ul className={cssClasses.List}>
          <li>
            <div><span className={cssClasses.Date}>15/03/2022</span> <Trl fr="Développeur web full-stack" en="Full-stack web developer" /></div>
            <ul className={cssClasses.SubList}>
              <li>Sfeir Luxembourg</li>
            </ul>
          </li>
          <li><span className={cssClasses.Date}>02/2019</span> <Trl fr="Réceptionniste dans un hôtel F1" en="Receptionist in an F1 hotel" /></li>
          <li><span className={cssClasses.Date}>2016-2017</span> <Trl fr="Agent d'accueil dans une location de vélos" en="Bicycle rental clerk" /></li>
          <li><span className={cssClasses.Date}>2013-2016</span> <Trl fr="Travaux divers" en="Odd jobs" /></li>
          <li>
            <div><span className={cssClasses.Date}>2011-2013</span> <Trl fr="Assistant de gestion PME-PMI" en="Administrative Assistant" /></div>
            <ul className={cssClasses.SubList}>
              <li>
                <Trl fr="Foyer de jeunes travailleurs Etap'Habitat à Metz (alternance)" en="Etap'Habitat Young Workers' Hostel, Metz, France (sandwich course)" />
              </li>
            </ul>
          </li>
        </ul>
      </article>

      <article className={cssClasses.Training}>
        <h3><Trl fr="Formation" en="Training" /></h3>
        <ul className={[cssClasses.List, cssClasses.col2].join(" ")}>
          <li>
            <span className={cssClasses.Date}>2020-2021</span> <Trl fr="Développeur web et web mobile" en="Web Developer" />
            <ul className={cssClasses.SubList}>
              <li><Trl fr="école WebForce3 Strasbourg" en="WebForce3 School, Strasbourg" /></li>
              <li><Trl fr="Titre professionnel de développeur web et web mobile" en="Web Development Bachelor's degree equivalency" /></li>
            </ul>
          </li>
          <li><span className={cssClasses.Date}>2011-2013</span> <Trl fr="Niveau BTS assistant de gestion" en="Administrative Assistant (sandwich course)" />
            <ul className={cssClasses.SubList}>
              <li><Trl fr="IFA à Metz" en="French Institute of Affairs, Metz" /></li>
            </ul>
          </li>
          <li><span className={cssClasses.Date}>2009-2011</span> <Trl fr="Licence LEA" en="Applied Foreign Languages Bachelor's" />
            <ul className={cssClasses.SubList}>
              <li><Trl fr="anglais-allemand-japonais" en="French - German - Japanese" /></li>
              <li><Trl fr="université du Saulcy à Metz" en="Saulcy University, Metz" /></li>
            </ul>
          </li>
          <li><span className={cssClasses.Date}>2009</span> <Trl fr="Bac L" en="Literary baccalauréat" />
            <ul className={cssClasses.SubList}>
              <li><Trl fr="15,15 de moyenne (mention Bien)" en="15.15/20 average score" /></li>
            </ul>
          </li>
        </ul>
      </article>

      <article className={cssClasses.Languages}>
        <h3><Trl fr="Langues" en="Languages" /></h3>
        <ul className={cssClasses.List}>
          <li><Trl fr="français natif" en="native French" /></li>
          <li><Trl fr="anglais courant" en="proficient English" /></li>
          <li><Trl fr="allemand correct" en="decent German" /></li>
          <li><Trl fr="japonais basique" en="basic Japanese" /></li>
          <li><Trl fr="chinois mandarin basique" en="basic Mandarin Chinese" /></li>
        </ul>
      </article>
    </section>
  );
}