import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from "./game.js";

console.log('app worked'); // нужен он тут?

const game = new Game();
game.start();