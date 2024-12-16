import Calculator from "@/components/Calculator/Calculator.jsx";
import Connect4 from "@/components/Connect4/Connect4.jsx";
import Header from "@/components/Header/Header.jsx";
import Minesweeper from "@/components/Minesweeper/Minesweeper.jsx";
import PasswordGenerator from "@/components/PasswordGenerator/PasswordGenerator.jsx";
import SnakeGame from "@/components/SnakeGame/SnakeGame.jsx";
import HomePage from "@/pages/HomePage.jsx";
import ProjectsPage from "@/pages/ProjectsPage/ProjectsPage.jsx";
import ResumePage from "@/pages/ResumePage/ResumePage.jsx";
import { languageObs, updateTranslations } from "@/utils/translations/translations.service.js";
import { Route, Router } from "@/core/Router.js";

export default function App(): DocumentFragment {
  languageObs.subscribe((language) => {
    document.documentElement.lang = language;
    updateTranslations(language);
  });
  languageObs.value = "en";

  return (
    <>
      <Header />
      <main>
        <Router>
          <Route page="home" component={HomePage} />
          <Route page="projects" component={ProjectsPage} />
          <Route page="cv" component={ResumePage} />
          <Route page="calculator" component={Calculator} />
          <Route page="connect-4" component={Connect4} />
          <Route page="minesweeper" component={Minesweeper} />
          <Route page="password-generator" component={PasswordGenerator} />
          <Route page="snake" component={SnakeGame} />
        </Router>
      </main>
    </>
  );
}