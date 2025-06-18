import favicon from "@/assets/favicon.png";
import githubLogo from "@/assets/github-logo.png";
import Trl from "@/components/Translatable/Trl.jsx";
import cssClasses from "./ContactDetail.module.scss";

export default function ContactDetail(): HTMLElement {
  return (
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
  );
}

const website = "https://melvdouc.github.io/static-website/";