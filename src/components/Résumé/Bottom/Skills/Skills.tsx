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
        <SkillListItem skill="Figma" rating={2} />
        <SkillListItem skill="React" rating={3} />
        <SkillListItem skill="Angular" rating={2} />
        <SkillListItem skill="Vue" rating={2} />
        <SkillListItem skill="Node" rating={4} />
        <SkillListItem skill="NPM" rating={4} />
        <SkillListItem skill="Express" rating={4} />
        <SkillListItem skill="Symfony" rating={1} />
        <SkillListItem skill="Spring Boot" rating={2} />
        <SkillListItem skill="Django" rating={1} />
        <SkillListItem skill="Docker" rating={1} />
        <SkillListItem skill="MySQL" rating={4} />
        <SkillListItem skill="MongoDB" rating={4} />
        <SkillListItem skill="Git" rating={4} />
      </ul>
    </article>
  );
}

function Circle({ filled }: {
  filled: boolean;
}) {
  return (
    <span className={{
      [cssClasses.Circle]: true,
      [cssClasses.CircleFilled]: filled
    }}></span>
  );
}

function Circles({ rating }: {
  rating: number;
}) {

  return (
    <div className={cssClasses.Circles}>
      {Array.from({ length: 5 }, (_, i) => (
        <Circle filled={i + 1 <= rating} />
      ))}
    </div>
  );
}

function SkillListItem({ skill, rating }: {
  skill: string;
  rating: number;
}) {
  return (
    <li><Circles rating={rating} />{skill}</li>
  );
}