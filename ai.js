"use strict";
// Implementing a simple AI opponent
const ai = function (listGame) {
  const opponentAIgamelist = [...listGame];
  let middlePosition = opponentAIgamelist[4];
  switch (middlePosition) {
    case 0:
      const move = [0, 2, 6, 8][Math.trunc(Math.random() * 4 + 1)];
      opponentAIgamelist[move] = 1;
      break;
  }
};
