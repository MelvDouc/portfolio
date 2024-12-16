
import Trl from "@/components/Translatable/Trl.jsx";
import cssClasses from "./Résumé.module.scss";
import ResumeBottom from "@/components/Résumé/Bottom/Bottom.jsx";

export default function Resume() {
  return (
    <div className={cssClasses.Resume}>
      <section className={cssClasses.Top}>
        <h1><Trl fr="CV de Melvin DOUCET" en="Melvin Doucet's Résumé" /></h1>
        <h2><Trl fr="Développeur full-stack" en="Full-Stack Developer" /></h2>
      </section>
      <ResumeBottom />
    </div>
  );
}