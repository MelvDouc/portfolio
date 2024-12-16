import cssClasses from "./SkillList.module.scss";

export default function SkillList() {
  return (
    <ul className={cssClasses.SkillList}>
      <li className={ratingClassName(10)}>HTML</li>
      <li className={ratingClassName(9)}>CSS</li>
      <li className={ratingClassName(10)}>Sass</li>
      <li className={ratingClassName(6)}>UI & UX</li>
      <li className={ratingClassName(4)}>Figma</li>
      <li className={ratingClassName(7)}>React</li>
      <li className={ratingClassName(5)}>Angular</li>
      <li className={ratingClassName(5)}>Vue</li>
      <li className={ratingClassName(8)}>Node</li>
      <li className={ratingClassName(9)}>NPM</li>
      <li className={ratingClassName(8)}>Express</li>
      <li className={ratingClassName(3)}>Symfony</li>
      <li className={ratingClassName(4)}>Spring Boot</li>
      <li className={ratingClassName(3)}>Django</li>
      <li className={ratingClassName(2)}>Docker</li>
      <li className={ratingClassName(9)}>MySQL</li>
      <li className={ratingClassName(8)}>MongoDB</li>
      <li className={ratingClassName(8)}>Git</li>
    </ul>
  );
}

function ratingClassName(value: number) {
  return {
    [cssClasses.rating]: true,
    [cssClasses[`rating${value}`]]: true
  };
}