import Header from "@/components/Header/Header.jsx";
import { Route, Router } from "@/core/Router.js";
import HomePage from "@/pages/HomePage.jsx";
import CalculatorPage from "@/pages/ProjectsPage/CalculatorPage.jsx";
import Connect4Page from "@/pages/ProjectsPage/Connect4Page.jsx";
import MinesweeperPage from "@/pages/ProjectsPage/MinesweeperPage.jsx";
import PasswordGeneratorPage from "@/pages/ProjectsPage/PasswordGeneratorPage.jsx";
import ProjectsPage from "@/pages/ProjectsPage/ProjectsPage.jsx";
import SnakeGamePage from "@/pages/ProjectsPage/SnakeGamePage.jsx";
import ResumePage from "@/pages/ResumePage/ResumePage.jsx";
import { languageObs } from "@/core/translations.js";

export default function App(): DocumentFragment {
  languageObs.subscribe((language) => {
    document.documentElement.lang = language;
  });
  languageObs.value = "fr";

  return (
    <>
      <Header />
      <main>
        <Router>
          <Route page="home" component={HomePage} />
          <Route page="projects" component={ProjectsPage} />
          <Route page="cv" component={ResumePage} />
          <Route page="calculator" component={CalculatorPage} />
          <Route page="connect-4" component={Connect4Page} />
          <Route page="minesweeper" component={MinesweeperPage} />
          <Route page="password-generator" component={PasswordGeneratorPage} />
          <Route page="snake" component={SnakeGamePage} />
        </Router>
      </main>
    </>
  );
}