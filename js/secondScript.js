// UTILS FN
const addClassName = (el, classNames) => {
  return el.classList.add(classNames);
};

const randomNumber = (maxNumber = 3) => {
  return Math.round(Math.random() * maxNumber);
};

// MODAL LOGIC
const openModalButton = document.getElementById("open-modal-button");
const closeModalButton = document.getElementById("close-modal-button");
const overlay = document.getElementById("overlay");

openModalButton.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  console.log(modal);
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

const openModal = (modal) => {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
};

const closeModal = (modal) => {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
};

// GAME LOGIC
const playerChoicePaper = document.getElementById("choice-paper");
const playerChoiceRock = document.getElementById("choice-rock");
const playerChoiceScissors = document.getElementById("choice-scissors");

let lastMatch = [];

playerChoicePaper.addEventListener("click", () => {
  const rand = randomNumber();
  display("pickedPaper");
  const computerSelected = computerChoice(rand);
  winner("pickedPaper", rand, computerSelected);
});

playerChoiceRock.addEventListener("click", () => {
  const rand = randomNumber();
  display("pickedRock");
  const computerSelected = computerChoice(rand);
  winner("pickedRock", rand, computerSelected);
});

playerChoiceScissors.addEventListener("click", () => {
  const rand = randomNumber();
  display("pickedScissors");
  const computerSelected = computerChoice(rand);
  winner("pickedScissors", rand, computerSelected);
});

// "VS" doit etre disable
// Les choix aussi
const display = (playerChoice) => {
  document.getElementById("center").classList.add("disable");
  document.getElementById("vs").classList.remove("disable");
  document.getElementById(playerChoice).classList.remove("disable");
};

const computerChoice = (rand) => {
  setTimeout(function () {
    document.getElementById("waiting").classList.add("disable");

    switch (rand) {
      case 0:
        document.getElementById("computerRock").classList.remove("disable");
        return "computerRock";
      case 1:
        document.getElementById("computerPaper").classList.remove("disable");
        return "computerPaper";
      case 2:
        document.getElementById("computerScissors").classList.remove("disable");
        return "computerScissors";
      default:
        alert("Error at in computerChoice switch");
        throw new Error("Error at in computerChoice switch");
    }
  }, 700);
};

function winner(playerChoice, rand, computerSelected) {
  setTimeout(() => {
    if (
      (playerChoice == "pickedRock" && rand == 2) ||
      (playerChoice == "pickedPaper" && rand == 0) ||
      (playerChoice == "pickedScissors" && rand == 1)
    ) {
      const winner = "winner" + playerChoice;
      const parap = document.getElementById("winLose");
      parap.innerHTML = "YOU WIN";
      document.getElementById("result").prepend(parap);
      document.getElementById("winner" + playerChoice).classList.add("winner");
      document.getElementById("fight").style.gridTemplateColumns =
        "33% 33% 33%";
      document.getElementById("result").style.display = "flex";
      document.getElementById("computer").style.gridColumnStart = "3";
    } else {
      const lose = "lose" + playerChoice;
      const parap = document.getElementById("winLose");
      parap.innerHTML = "YOU LOSE";
      document.getElementById("result").prepend(parap);
      document.getElementById("lose" + playerChoice).classList.add("winner");
      document.getElementById("fight").style.gridTemplateColumns =
        "33% 33% 33%";

      document.getElementById("result").style.display = "flex";
      document.getElementById("computer").style.gridColumnStart = "3";
    }

    lastMatch = [playerChoice, computerSelected];
  }, 700);
}

// Reset the game when click on play again
const reset = (playerChoice) => {
  document.getElementById("winLose").innerHTML = "";

  const els = document.getElementsByClassName("enable");
  for (let i = 0; i < els.length; i++) {
    els[i].classList.add("disable");
    els[i].classList.remove("enable");
  }

  document.getElementById("vs").classList.remove("disable");
  document.getElementById("center").classList.remove("disable");
  document.getElementById("waiting").classList.add("disable");
  lastMatch = [];
};

replay.addEventListener("click", () => {
  console.log(lastMatch);
  reset();
});
