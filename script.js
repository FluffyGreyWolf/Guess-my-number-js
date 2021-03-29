//Defining functions and values
function displayMessage(message) {
  document.querySelector(".message").textContent = `${message}`;
}
function lost() {
  displayMessage("You lost!");
  document.querySelector(".score").textContent = 0;
  document.querySelector("body").style.backgroundColor = "red";
  document.querySelector(".number").textContent = secretNumber;
}
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

//Game logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //Checking if value is right
  if (!guess || guess > 20 || guess < 1) {
    displayMessage("Number must be between 1 and 20!");
  }

  //Correct guess
  else if (guess === secretNumber) {
    if (score > 0) {
      displayMessage("Correct number!");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = secretNumber;
      if (Number(document.querySelector(".highscore").textContent) < score) {
        document.querySelector(".highscore").textContent = score;
      }
    } else {
      lost();
    }
  }

  //Wrong guess
  else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      lost();
    }
  }
});

//Reset button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Playing again!");
  document.querySelector(".score").textContent = "20";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
