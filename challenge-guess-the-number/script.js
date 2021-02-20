let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

let numberOfTries = document.querySelector(".Tries-output");

let counter = 7;

function guessNumber() {
  let guess = document.querySelector(".inputs-Values").value;
  // console.log(guess);
  
  // console.log(numberOfTries);
  
  const output = document.querySelector(".final-output");
  // console.log(output);
  
  
  //Collect input from the user
  
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  
  if (!(guess > 0 && guess < 100)) {
    return alert("Please enter a number between 1 and 100");
  } else if (guess == randomNumber) {
    return output.innerHTML = "Guess is correct. You win!"
  } else if (guess > randomNumber) {
    return output.innerHTML = "Number is too high, try again;"
  } else output.innerHTML = "Number is too low, try again;"
  
  numberOfTries.innerHTML = " ";
  
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  numberOfTries.innerHTML = `Number of Tries: ${counter}`;
  //Your code here
  //Reset randomNumber
  //Reset users input field
  // document.querySelector(".inputs-Values").value = " ";
  //Reset tries, and triesTaken by the user
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
