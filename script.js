"use strict";

const newGameEl = document.querySelector("#new-game");
const newGamePopup = document.querySelector(".popup");
const winnerMessage = document.querySelector("#winnerMessage");
const winnerPopUpEl = document.querySelector("#winnerPopup");

const restart = function () {
  for (let i = 0; i < gameList.length; i++) {
    gameList[i] = 0;
  }
  for (let i = 0; i < 9; i++) {
    document.getElementById(`${i}`).textContent = "";
  }
  winnerPopUpEl.classList.add("hidden");
  winnerMessage.classList.add("hidden");
};

const winnerPopUp = function (winner) {
  winnerMessage.textContent = `${winner} won!`;
  winnerPopUpEl.classList.remove("hidden");
};

const checkIfWon = function (player) {
  switch (player) {
    case "x":
      //checking if x won - horizontal
      for (let i = 0; i < gameList.length; i++) {
        if (gameList[i] === 2) {
          if (i === 1 || i === 4 || i === 7) {
            if (gameList[i + 1] === 2 && gameList[i - 1] === 2)
              winnerPopUp("X");
            break;
          }
        }
      }

      //checking if x won - vertical
      for (let i = 0; i < gameList.length; i++) {
        if (gameList[i] === 2) {
          if (i === 3 || i === 4 || i === 5) {
            if (gameList[i - 3] === 2 && gameList[i + 3] === 2) {
              winnerPopUp("X");
              break;
            }
          }
        }
      }

      //checking if x won - cross
      for (let i = 0; i < gameList.length; i++) {
        if (gameList[i] === 2) {
          if (i === 4) {
            if (
              (gameList[i - 4] === 2 && gameList[i + 4] === 2) ||
              (gameList[i - 2] === 2 && gameList[i + 2] === 2)
            ) {
              winnerPopUp("X");
              break;
            }
          }
        }
      }
      break;

    case "o":
      // checking if o won - horizontal
      for (let i = 0; i < gameList.length; i++) {
        if (gameList[i] === 1) {
          if (i === 1 || i === 4 || i === 7) {
            if (gameList[i + 1] === 1 && gameList[i - 1] === 1) {
              winnerPopUp("O");
              break;
            }
          }
        }
      }
      //checking if o won - vertical
      for (let i = 0; i < gameList.length; i++) {
        if (gameList[i] === 1) {
          if (i === 3 || i === 4 || i === 5) {
            if (gameList[i - 3] === 1 && gameList[i + 3] === 1) {
              winnerPopUp("O");
              break;
            }
          }
        }
      }
      // checking if o won - cross
      for (let i = 0; i < gameList.length; i++) {
        if (gameList[i] === 1) {
          if (i === 4) {
            if (
              (gameList[i - 4] === 1 && gameList[i + 4] === 1) ||
              (gameList[i - 2] === 1 && gameList[i + 2] === 1)
            ) {
              winnerPopUp("O");
              break;
            }
          }
        }
      }
      break;
  }
};

winnerPopUpEl.classList.add("hidden");
winnerMessage.classList.add("hidden");

let xTurn = true;
let oTurn = false;

// 1 is O and x is 2, not filled = 0;
let gameList = [0, 0, 0, 0, 0, 0, 0, 0, 0];

newGameEl.addEventListener("click", function () {
  newGamePopup.classList.add("hidden");
});
for (let i = 0; i < 9; i++) {
  document.getElementById(`${i}`).addEventListener("click", function () {
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
        checkIfWon("o");
        oTurn = false;
        xTurn = true;
      }
    }
  });
}

document.querySelector("#restart").addEventListener("click", restart);
