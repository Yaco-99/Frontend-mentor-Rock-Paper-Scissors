const openModalButton = document.getElementById("open-modal-button");
const closeModalButton = document.getElementById("close-modal-button");
const overlay = document.getElementById("overlay");
const replay = document.getElementById("replay");
const playerChoicePaper = document.getElementById("choice-paper");
const playerChoiceRock = document.getElementById("choice-rock");
const playerChoiceScissors = document.getElementById("choice-scissors");
const computerId = document.getElementById("computerChoice");
const computerPick = document.getElementById("computerPicked");
const choiceImg = document.getElementById("choiceImg");
const center = document.getElementById("center");
const winLose = document.getElementById("winLose");
const vs = document.getElementById("vs");
const waiting = document.getElementById("waiting");
const count = document.getElementById("score");
const computer = document.getElementById("computer");
const modal = document.getElementById("modal");
const fight = document.getElementById("fight");
const result = document.getElementById("result");
const playerChoiceId = document.getElementById("playerChoice");
const playerPicked = document.getElementById("playerPicked");
let computerChoice = "default";
let playerChoice = "default";
let score = 0;
let win = document.getElementById("");
let playerChoiceImg = "src";

const randomNumber = (maxNumber = 2) => {
  return Math.round(Math.random() * maxNumber);
};

openModalButton.addEventListener("click", () => {
  openModal(modal);
});

overlay.addEventListener("click", () => {
  const modal = document.querySelector(".modal.active");
  closeModal(modal);
});

closeModalButton.addEventListener("click", () => {
  closeModal(modal);
});

playerChoicePaper.addEventListener("click", () => {
  playerChoice = "blue";
  playerChoiceImg = "images/icon-paper.svg";
  let rand = randomNumber();
  display(playerChoice);
  computerRandom(rand);
  winner(playerChoice, rand, score);
});

playerChoiceRock.addEventListener("click", () => {
  playerChoice = "red";
  playerChoiceImg = "images/icon-rock.svg";
  let rand = randomNumber();
  display(playerChoice);
  computerRandom(rand);
  winner(playerChoice, rand, score);
});

playerChoiceScissors.addEventListener("click", () => {
  playerChoice = "yellow";
  playerChoiceImg = "images/icon-scissors.svg";
  let rand = randomNumber();
  display(playerChoice);
  computerRandom(rand);
  winner(playerChoice, rand, score);
});

replay.addEventListener("click", () => {
  reset();
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function display(playerChoice) {
  center.classList.add("disable");
  vs.classList.add("enable");
  playerChoiceId.classList.remove("disable");
  playerPicked.classList.add(playerChoice);
  document.getElementById("playerChoiceImg").src = playerChoiceImg;
}

function computerRandom(rand) {
  setTimeout(function () {
    waiting.classList.add("disable");
    console.log(rand);
    switch (rand) {
      case 0:
        computerId.classList.remove("disable");
        computerPick.classList.add("red");
        choiceImg.src = "images/icon-rock.svg";
        computerChoice = "red";
        break;

      case 1:
        computerId.classList.remove("disable");
        computerPick.classList.add("blue");
        choiceImg.src = "images/icon-paper.svg";
        computerChoice = "blue";
        break;
      case 2:
        computerId.classList.remove("disable");
        computerPick.classList.add("yellow");
        choiceImg.src = "images/icon-scissors.svg";
        computerChoice = "yellow";
        break;
    }
  }, 700);
}
function winner(playerChoice, rand, score) {
  setTimeout(() => {
    if (
      (playerChoice == "red" && rand == 2) ||
      (playerChoice == "blue" && rand == 0) ||
      (playerChoice == "yellow" && rand == 1)
    ) {
      const parap = winLose;
      parap.innerHTML = "YOU WIN";
      win = playerPicked;
      win.classList.add("winner");
      fight.style.gridTemplateColumns = "33% 33% 33%";
      result.style.display = "flex";
      computer.style.gridColumnStart = "3";
      Score(1);
    } else if (
      (playerChoice == "red" && rand == 1) ||
      (playerChoice == "blue" && rand == 2) ||
      (playerChoice == "yellow" && rand == 0)
    ) {
      const parap = winLose;
      parap.innerHTML = "YOU LOSE";
      win = computerPick;
      win.classList.add("winner");
      fight.style.gridTemplateColumns = "33% 33% 33%";

      result.style.display = "flex";
      computer.style.gridColumnStart = "3";
      Score(-1);
    } else {
      const parap = winLose;
      parap.innerHTML = "DRAW";
      fight.style.gridTemplateColumns = "33% 33% 33%";

      result.style.display = "flex";
      computer.style.gridColumnStart = "3";
      count.innerHTML = score;
    }
  }, 700);
}

function Score(value) {
  score += value;
  count.innerHTML = score;
}

function reset() {
  console.log(computerChoice);
  console.log(score);
  winLose.innerHTML = "";
  playerChoiceId.classList.add("disable");
  computerId.classList.add("disable");
  computerPick.classList.remove(computerChoice);
  playerPicked.classList.remove(playerChoice);
  vs.classList.remove("enable");
  center.classList.remove("disable");
  waiting.classList.remove("disable");
  win.classList.remove("winner");
}
