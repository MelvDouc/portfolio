import Trl from "@/components/Translatable/Trl.jsx";
import cssClasses from "./Skills.module.scss";

export default function Skills() {
  return (
    <article className={cssClasses.Skills}>
      <h3><Trl fr="Compétences" en="Skills" /></h3>
      <ul className={cssClasses.SkillList}>
        <SkillListItem skill="HTML" rating={5} />
        <SkillListItem skill="CSS" rating={4} />
        <SkillListItem skill="Sass" rating={5} />
        <SkillListItem skill="UI & UX" rating={3} />
        <SkillListItem skill="Figma" rating={3} />
        <SkillListItem skill="React" rating={3.5} />
        <SkillListItem skill="Angular" rating={2} />
        <SkillListItem skill="Node" rating={4.5} />
        <SkillListItem skill="NPM" rating={4.5} />
        <SkillListItem skill="Express" rating={4} />
        <SkillListItem skill="Symfony" rating={2} />
        <SkillListItem skill="Spring Boot" rating={1.5} />
        <SkillListItem skill="Python" rating={4.5} />
        <SkillListItem skill="Machine learning" rating={4} small />
        <SkillListItem skill="Django" rating={3.5} />
        <SkillListItem skill="Docker" rating={4} />
        <SkillListItem skill="SQL" rating={4.5} />
        <SkillListItem skill="MongoDB" rating={4} />
        <SkillListItem skill="Git" rating={3} />
      </ul>
    </article>
  );
}

function SkillListItem({ skill, rating, small = false }: {
  skill: string;
  rating: number;
  small?: boolean;
}) {
  return (
    <li title={`${skill}: ${rating}/5`}><Circles rating={rating} /><span className={{ [cssClasses.small]: small }}>{skill}</span></li>
  );
}

function Circles({ rating }: {
  rating: number;
}) {
  return (
    <div className={cssClasses.Circles} data-rating={rating}>
      {Array.from({ length: 5 }, (_, i) => (
        <span className={cssClasses.Circle} data-filled={getCircledFilled(rating, i)}></span>
      ))}
    </div>
  );
}


function getCircledFilled(rating: number, index: number): string {
  const diff = (index + 1) - rating;

  return diff === 0.5 ? "half"
    : diff <= 0 ? "filled"
      : "empty";
}