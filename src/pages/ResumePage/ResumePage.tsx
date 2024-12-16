import favicon from "@/assets/favicon.png";
import githubLogo from "@/assets/github-logo.png";
import ownPicture from "@/assets/melvin-doucet.jpg";
import CvSkillsList from "@/components/CvSkillsList/CvSkillsList.jsx";
import { trl } from "@/utils/translations/translations.service.js";
import cssClasses from "./ResumePage.module.scss";

export default function ResumePage() {
  return (
    <div className={cssClasses.cv}>
      <section className={cssClasses.pageTop}>
        <h1 data-trl="cv-title"></h1>
        <h2 data-trl="cv-subtitle"></h2>
      </section>

      <section className={cssClasses.pageBottom}>
        <article className={cssClasses.picContainer}>
          <img src={ownPicture} alt="Melvin Doucet" />
        </article>

        <article className={cssClasses.contactDetail}>
          <h3 data-trl="2"></h3>
          <dl>
            <dt>☎️</dt>
            <dd>+33.6.09.21.97.14</dd>
            <dt>@</dt>
            <dd>melv.douc@gmail.com</dd>
            <dt><img src={githubLogo} alt="GitHub Logo" /></dt>
            <dd><a href="https://github.com/MelvDouc">https://github.com/MelvDouc</a></dd>
            <dt><img src={favicon} alt="Logo" /></dt>
            <dd><a href="https://www.melvin-doucet.com">https://www.melvin-doucet.com</a></dd>
            <dt>✉️</dt>
            <dd>
              <address>
                <p>43 rue de l'ancien hôpital</p>
                <p>57100 Thionville - France</p>
              </address>
            </dd>
          </dl>
        </article>

        <article className={cssClasses.hobbies}>
          <h3 data-trl="28"></h3>
          <ul className={cssClasses.list}>
            <li data-trl="cv-hobbies-volunteering"></li>
            <li data-trl="cv-hobbies-chess"></li>
            <li data-trl="cv-hobbies-reading"></li>
          </ul>
        </article>

        <article className={cssClasses.skills}>
          <h3 data-trl="3"></h3>
          <CvSkillsList />
        </article>

        <article className={cssClasses.exp}>
          <h3 data-trl="4"></h3>
          <ul className={cssClasses.list}>
            <li>
              <div><span className={cssClasses.date}>15/03/2022</span> <span data-trl="5"></span></div>
              <ul className={cssClasses.subList}>
                <li>Sfeir Luxembourg</li>
              </ul>
            </li>
            <li><span className={cssClasses.date}>02/2019</span> {trl("6")}</li>
            <li><span className={cssClasses.date}>2016-2017</span> <span data-trl="7"></span></li>
            <li><span className={cssClasses.date}>2013-2016</span> <span data-trl="8"></span></li>
            <li>
              <div><span className={cssClasses.date}>2011-2013</span> <span data-trl="9"></span></div>
              <ul className={cssClasses.subList}>
                <li data-trl="10"></li>
              </ul>
            </li>
          </ul>
        </article>

        <article className={cssClasses.training}>
          <h3 data-trl="11"></h3>
          <ul className={[cssClasses.list, cssClasses.col2].join(" ")}>
            <li>
              <span className={cssClasses.date}>2020-2021</span> <span data-trl="12"></span>
              <ul className={cssClasses.subList}>
                <li data-trl="13"></li>
                <li data-trl="14"></li>
              </ul>
            </li>
            <li><span className={cssClasses.date}>2011-2013</span> <span data-trl="15"></span>
              <ul className={cssClasses.subList}>
                <li data-trl="16"></li>
              </ul>
            </li>
            <li><span className={cssClasses.date}>2009-2011</span> <span data-trl="17"></span>
              <ul className={cssClasses.subList}>
                <li data-trl="18"></li>
                <li data-trl="19"></li>
              </ul>
            </li>
            <li><span className={cssClasses.date}>2009</span> <span data-trl="20"></span>
              <ul className={cssClasses.subList}>
                <li data-trl="21"></li>
              </ul>
            </li>
          </ul>
        </article>

        <article className={cssClasses.languages}>
          <h3 data-trl="22"></h3>
          <ul className={cssClasses.list}>
            <li data-trl="23"></li>
            <li data-trl="24"></li>
            <li data-trl="25"></li>
            <li data-trl="26"></li>
            <li data-trl="27"></li>
          </ul>
        </article>
      </section>
    </div>
  );
}