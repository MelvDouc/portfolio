import cssClasses from "./CvSkillsList.module.scss";

export default function CvSkillsList() {
  return (
    <ul className={cssClasses.skillsList}>
      <li className={[cssClasses.rating, cssClasses.rating10].join(" ")}>HTML</li>
      <li className={[cssClasses.rating, cssClasses.rating9].join(" ")}>CSS</li>
      <li className={[cssClasses.rating, cssClasses.rating10].join(" ")}>Sass</li>
      <li className={[cssClasses.rating, cssClasses.rating6].join(" ")}>UI & UX</li>
      <li className={[cssClasses.rating, cssClasses.rating4].join(" ")}>Figma</li>
      <li className={[cssClasses.rating, cssClasses.rating7].join(" ")}>React</li>
      <li className={[cssClasses.rating, cssClasses.rating5].join(" ")}>Angular</li>
      <li className={[cssClasses.rating, cssClasses.rating5].join(" ")}>Vue</li>
      <li className={[cssClasses.rating, cssClasses.rating8].join(" ")}>Node</li>
      <li className={[cssClasses.rating, cssClasses.rating9].join(" ")}>NPM</li>
      <li className={[cssClasses.rating, cssClasses.rating8].join(" ")}>Express</li>
      <li className={[cssClasses.rating, cssClasses.rating3].join(" ")}>Symfony</li>
      <li className={[cssClasses.rating, cssClasses.rating4].join(" ")}>Spring Boot</li>
      <li className={[cssClasses.rating, cssClasses.rating3].join(" ")}>Django</li>
      <li className={[cssClasses.rating, cssClasses.rating2].join(" ")}>Docker</li>
      <li className={[cssClasses.rating, cssClasses.rating9].join(" ")}>MySQL</li>
      <li className={[cssClasses.rating, cssClasses.rating8].join(" ")}>MongoDB</li>
      <li className={[cssClasses.rating, cssClasses.rating8].join(" ")}>Git</li>
    </ul>
  );
}