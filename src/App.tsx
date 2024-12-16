import Header from "@/components/Header/Header.jsx";
import { Route, Router } from "@/core/Router.js";
import { languageObs } from "@/core/translations.js";
import HomePage from "@/pages/HomePage.jsx";
import CalculatorPage from "@/pages/projects/CalculatorPage.jsx";
import Connect4Page from "@/pages/projects/Connect4Page.jsx";
import MinesweeperPage from "@/pages/projects/MinesweeperPage.jsx";
import PasswordGeneratorPage from "@/pages/projects/PasswordGeneratorPage.jsx";
import SnakeGamePage from "@/pages/projects/SnakeGamePage.jsx";
import ProjectsPage from "@/pages/ProjectsPage.jsx";
import ResumePage from "@/pages/ResumePage.jsx";

export default function App(): DocumentFragment {
  languageObs.subscribe((language) => {
    document.documentElement.lang = language;
  });

  return (
    <>
      <Header />
      <main>
        <Router>
          <Route page="" component={HomePage} />
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