let cells = document.querySelectorAll(".cell");
let resetbtn = document.querySelector(".reset");
let player = 2;

cells.forEach(function(cell) {
  cell.addEventListener("click", cellClicked);
});

resetbtn.addEventListener("click", cellClean);

function cellClicked(e) {
  if (e.target.innerText === "X" || e.target.innerText === "O") {
    return;
  }
  // ** This part thanks to Discord which I could not solve by myself
  if (player % 2 === 0) {
    e.target.innerText = "X";
  } else {
    e.target.innerText = "O";
  }
  player++;
  // **
  checkWin();
}

function checkWin() {
  // Player X
  if (
    document.getElementById("top-left").innerText === "X" &&
    document.getElementById("top-center").innerText === "X" &&
    document.getElementById("top-right").innerText === "X"
  ) {
    document.getElementById("message").innerText = "Player X WIN!!!";
    setTimeout(cellClean, 3000);
  }

  if (
    document.getElementById("middle-left").innerText === "X" &&
    document.getElementById("middle-center").innerText === "X" &&
    document.getElementById("middle-right").innerText === "X"
  ) {
    document.getElementById("message").innerText = "Player X WIN!!!";
    setTimeout(cellClean, 5000);
  }

  if (
    document.getElementById("bottom-left").innerText === "X" &&
    document.getElementById("bottom-center").innerText === "X" &&
    document.getElementById("bottom-right").innerText === "X"
  ) {
    document.getElementById("message").innerText = "Player X WIN!!!";
    setTimeout(cellClean, 3000);
  }

  if (
    document.getElementById("top-left").innerText === "X" &&
    document.getElementById("middle-center").innerText === "X" &&
    document.getElementById("bottom-right").innerText === "X"
  ) {
    document.getElementById("message").innerText = "Player X WIN!!!";
    setTimeout(cellClean, 5000);
  }

  if (
    document.getElementById("top-left").innerText === "X" &&
    document.getElementById("middle-left").innerText === "X" &&
    document.getElementById("bottom-left").innerText === "X"
  ) {
    document.getElementById("message").innerText = "Player X WIN!!!";
    setTimeout(cellClean, 3000);
  }

  if (
    document.getElementById("top-center").innerText === "X" &&
    document.getElementById("middle-center").innerText === "X" &&
    document.getElementById("bottom-center").innerText === "X"
  ) {
    document.getElementById("message").innerText = "Player X WIN!!!";
    setTimeout(cellClean, 3000);
  }

  if (
    document.getElementById("top-right").innerText === "X" &&
    document.getElementById("middle-right").innerText === "X" &&
    document.getElementById("bottom-right").innerText === "X"
  ) {
    document.getElementById("message").innerText = "Player X WIN!!!";
    setTimeout(cellClean, 3000);
  }

  // Player O
  if (
    document.getElementById("top-left").innerText === "O" &&
    document.getElementById("top-center").innerText === "O" &&
    document.getElementById("top-right").innerText === "O"
  ) {
    document.getElementById("message").innerText = "Player O WIN!!!";
    setTimeout(cellClean, 5000);
  }

  if (
    document.getElementById("middle-left").innerText === "O" &&
    document.getElementById("middle-center").innerText === "O" &&
    document.getElementById("middle-right").innerText === "O"
  ) {
    document.getElementById("message").innerText = "Player O WIN!!!";
    setTimeout(cellClean, 3000);
  }

  if (
    document.getElementById("bottom-left").innerText === "O" &&
    document.getElementById("bottom-center").innerText === "O" &&
    document.getElementById("bottom-right").innerText === "O"
  ) {
    document.getElementById("message").innerText = "Player O WIN!!!";
    setTimeout(cellClean, 3000);
  }

  if (
    document.getElementById("top-left").innerText === "O" &&
    document.getElementById("middle-center").innerText === "O" &&
    document.getElementById("bottom-right").innerText === "O"
  ) {
    document.getElementById("message").innerText = "Player O WIN!!!";
    setTimeout(cellClean, 3000);
  }

  if (
    document.getElementById("top-left").innerText === "O" &&
    document.getElementById("middle-left").innerText === "O" &&
    document.getElementById("bottom-left").innerText === "O"
  ) {
    document.getElementById("message").innerText = "Player O WIN!!!";
    setTimeout(cellClean, 3000);
  }

  if (
    document.getElementById("top-center").innerText === "O" &&
    document.getElementById("middle-center").innerText === "O" &&
    document.getElementById("bottom-center").innerText === "O"
  ) {
    document.getElementById("message").innerText = "Player O WIN!!!";
    setTimeout(cellClean, 3000);
  }

  if (
    document.getElementById("top-right").innerText === "O" &&
    document.getElementById("middle-right").innerText === "O" &&
    document.getElementById("bottom-right").innerText === "O"
  ) {
    document.getElementById("message").innerText = "Player O WIN!!!";
    setTimeout(cellClean, 3000);
  }
}

function cellClean() {
  player = 2;
  document.getElementById("message").innerHTML = "";
  for (let i = 0; i <= cells.length; i++) {
    cells[i].innerText = "";
  }
}
