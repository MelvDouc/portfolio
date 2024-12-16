import Page from "@/components/Page/Page.jsx";
import SnakeGame from "@/components/SnakeGame/SnakeGame.jsx";

export default function SnakeGamePage(): HTMLElement {
  return (
    <Page title="Snake">
      <SnakeGame />
    </Page>
  );
}