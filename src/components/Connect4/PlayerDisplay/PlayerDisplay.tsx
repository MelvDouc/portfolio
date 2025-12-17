import type Game from "@/components/Connect4/game/Game.js";
import Player from "@/components/Connect4/game/Player.js";

import cssClasses from "./PlayerDisplay.module.scss";

export default function PlayerDisplay({ game }: {
  game: Game;
}) {
  const $init = (element: HTMLElement) => {
    game.onAction((action) => {
      switch (action.kind) {
        case "player-change":
          element.innerText = `${playerDiscs[action.player]} to move`;
          break;
        case "game-won":
          element.innerText = `${playerDiscs[action.winner]} wins!`;
          break;
        case "game-reset":
          element.innerText = `${playerDiscs[Player.RED]} to move`;

      }
    });
  };

  return (
    <div className={cssClasses.PlayerDisplay} $init={$init}>
      {playerDiscs[Player.RED]} to move
    </div>
  );
}

const playerDiscs = {
  [Player.RED]: "🔴",
  [Player.YELLOW]: "🟡"
} as const;