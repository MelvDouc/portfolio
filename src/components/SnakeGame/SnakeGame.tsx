import SmallComponentWrapper from "@/components/SmallComponentWrapper/SmallComponentWrapper.jsx";
import SnakeCanvas from "./SnakeCanvas.jsx";

export default function SnakeGame() {
  return (
    <SmallComponentWrapper>
      {new SnakeCanvas()}
    </SmallComponentWrapper>
  );
}