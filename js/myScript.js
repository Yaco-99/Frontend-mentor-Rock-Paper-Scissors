const openModalButton = document.getElementById("open-modal-button");
const closeModalButton = document.getElementById("close-modal-button");
const overlay = document.getElementById("overlay");
const replay = document.getElementById("replay");
const playerChoicePaper = document.getElementById("choice-paper");
const playerChoiceRock = document.getElementById("choice-rock");
const playerChoiceScissors = document.getElementById("choice-scissors");
let computerChoice = "default";
let playerChoice = "default";
let score = 0;

const randomNumber = (maxNumber = 2) => {
  return Math.round(Math.random() * maxNumber);
};

openModalButton.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  openModal(modal);
});

overlay.addEventListener("click", () => {
  const modal = document.querySelector(".modal.active");
  closeModal(modal);
});

closeModalButton.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  closeModal(modal);
});

playerChoicePaper.addEventListener("click", () => {
  playerChoice = "pickedPaper";
  let rand = randomNumber();
  display(playerChoice);
  computerRandom(rand, computerChoice);
  winner(playerChoice, rand, score);
});

playerChoiceRock.addEventListener("click", () => {
  playerChoice = "pickedRock";
  let rand = randomNumber();
  display(playerChoice);
  computerRandom(rand, computerChoice);
  winner(playerChoice, rand, score);
});

playerChoiceScissors.addEventListener("click", () => {
  playerChoice = "pickedScissors";
  let rand = randomNumber();
  display(playerChoice);
  computerRandom(rand, computerChoice);
  winner(playerChoice, rand, score);
});

replay.addEventListener("click", () => {
  reset(playerChoice, computerChoice);
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
  document.getElementById("center").classList.add("disable");
  document.getElementById("vs").classList.add("enable");
  document.getElementById(playerChoice).classList.remove("disable");
}

function computerRandom(rand, computerChoice) {
  setTimeout(function () {
    document.getElementById("waiting").classList.add("disable");
    switch (rand) {
      case 0:
        document.getElementById("computerRock").classList.remove("disable");
        //computerChoice = "computerRock";
        break;

      case 1:
        document.getElementById("computerPaper").classList.remove("disable");
        //computerChoice = "computerPaper";
        break;
      case 2:
        document.getElementById("computerScissors").classList.remove("disable");
        //computerChoice = "computerScissors";
        break;
    }
  }, 700);
}
function winner(playerChoice, rand, score) {
  setTimeout(() => {
    if (
      (playerChoice == "pickedRock" && rand == 2) ||
      (playerChoice == "pickedPaper" && rand == 0) ||
      (playerChoice == "pickedScissors" && rand == 1)
    ) {
      const parap = document.getElementById("winLose");
      parap.innerHTML = "YOU WIN";
      document.getElementById("winner" + playerChoice).classList.add("winner");
      document.getElementById("fight").style.gridTemplateColumns =
        "33% 33% 33%";
      document.getElementById("result").style.display = "flex";
      document.getElementById("computer").style.gridColumnStart = "3";
      Score(1);
    } else if (
      (playerChoice == "pickedRock" && rand == 1) ||
      (playerChoice == "pickedPaper" && rand == 2) ||
      (playerChoice == "pickedScissors" && rand == 0)
    ) {
      const parap = document.getElementById("winLose");
      parap.innerHTML = "YOU LOSE";
      document.getElementById("lose" + playerChoice).classList.add("winner");
      document.getElementById("fight").style.gridTemplateColumns =
        "33% 33% 33%";

      document.getElementById("result").style.display = "flex";
      document.getElementById("computer").style.gridColumnStart = "3";
      Score(-1);
    } else {
      const parap = document.getElementById("winLose");
      parap.innerHTML = "DRAW";
      document.getElementById("fight").style.gridTemplateColumns =
        "33% 33% 33%";

      document.getElementById("result").style.display = "flex";
      document.getElementById("computer").style.gridColumnStart = "3";
      document.getElementById("score").innerHTML = score;
    }
  }, 700);
}

function Score(value) {
  score += value;
  document.getElementById("score").innerHTML = score;
}

function reset(playerChoice, computerChoice) {
  console.log(computerChoice);
  document.getElementById("winLose").innerHTML = "";
  document.getElementById(playerChoice).classList.add("disable");
  //document.getElementById(computerChoice).classList.add("disable");
  document.getElementById("computerScissors").classList.add("disable");
  document.getElementById("computerRock").classList.add("disable");
  document.getElementById("computerPaper").classList.add("disable");
  document.getElementById("vs").classList.remove("enable");
  document.getElementById("center").classList.remove("disable");
  document.getElementById("waiting").classList.remove("disable");
  document.getElementById("winner" + playerChoice).classList.remove("winner");
  document.getElementById("lose" + playerChoice).classList.remove("winner");
}
