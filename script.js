"use strict";

const checkIfWon = function (player) {
  switch (player) {
    case "x":
      //checking if x won
      for (let i = 0; i < gameList.length; i++) {
        if (gameList[i] === 2) {
        }
      }
    case "o":
    // checking if o won
  }
};

let xTurn = true;
let oTurn = false;

// 1 is O and x is 2, not filled = 0;
let gameList = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const newGameEl = document.querySelector("#new-game");
const newGamePopup = document.querySelector(".popup");

newGameEl.addEventListener("click", function () {
  newGamePopup.classList.add("hidden");
});
for (let i = 0; i < 9; i++) {
  document.getElementById(`${i}`).addEventListener("click", function () {
    console.log("clicked!");
    if (gameList[i] === 0) {
      if (xTurn) {
        document.getElementById(`${i}`).textContent = "X";
        gameList[i] = 2;
        checkIfWon("x");
        oTurn = true;
        xTurn = false;
      } else if (oTurn) {
        document.getElementById(`${i}`).textContent = "O";
        gameList[i] = 1;
        oTurn = false;
        xTurn = true;
      }
    }
  });
}
