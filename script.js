"use strict";

let displayMessage = function (phrase) {
  document.querySelector(".message").textContent = phrase;
};
var randomN = parseInt(Math.random() * 20 + 1);
var score = Number(document.querySelector(".score").textContent);
console.log(randomN);
var highScore = Number(document.querySelector(".highscore").textContent);

document.querySelector(".check").addEventListener("click", function () {
  var input = Number(document.querySelector(".guess").value);
  if (!input) {
    document.querySelector(".message").textContent = "Digite um número válido!";
  } else {
    if (score === 0) {
      displayMessage("Você Perdeu!");
      document.querySelector("body").style.backgroundColor = "red";
    } else if (input === randomN) {
      displayMessage("PARABÉNS!");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = randomN;
      document.querySelector(".number").style.width = "30rem";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    }
    if (input !== randomN) {
      displayMessage(input < randomN ? "Esta acima!" : "Esta abaixo!");
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing");
  randomN = parseInt(Math.random() * 20 + 1);
  console.log(randomN);
});
