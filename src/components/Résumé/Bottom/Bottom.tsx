
import cssClasses from "./Bottom.module.scss";
import ContactDetail from "@/components/Résumé/Bottom/ContactDetail/ContactDetail.jsx";
import PicContainer from "@/components/Résumé/Bottom/PicContainer/PicContainer.jsx";
import Hobbies from "@/components/Résumé/Bottom/Hobbies/Hobbies.jsx";
import Skills from "@/components/Résumé/Bottom/Skills/Skills.jsx";
import Exp from "@/components/Résumé/Bottom/Exp/Exp.jsx";
import Training from "@/components/Résumé/Bottom/Training/Training.jsx";
import Languages from "@/components/Résumé/Bottom/Languages/Languages.jsx";

export default function Bottom() {
  return (
    <section className={cssClasses.Bottom}>
      <PicContainer />
      <ContactDetail />
      <Hobbies />
      <Skills />
      <Exp />
      <Training />
      <Languages />
    </section>
  );
}