import Minesweeper from "@/components/Minesweeper/Minesweeper.jsx";
import Page from "@/components/Page/Page.jsx";

export default function MinesweeperPage(): HTMLElement {
  return (
    <Page title="Minesweeper">
      <Minesweeper />
    </Page>
  );
}