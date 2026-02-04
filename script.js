// script.js
let randomNumber = Math.floor(Math.random() * 10) + 1;

document.getElementById("btn").addEventListener("click", function () {
  let userGuess =Number(document.getElementById("guess").value);
  if (userGuess===randomNumber){
    document.getElementById("result").innerText = "guessed it right!";
  } else {
    console.log("try again!");
  }
  });