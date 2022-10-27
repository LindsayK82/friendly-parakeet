// // Assignment code here


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var generate = document.querySelector("#generate")
var password = document.getElementById("password");
var chars = ["0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKL"]
var passwordLength = 12;
var password = "";

function writePassword( {
  var generate = window.prompt();

  for (var i = 0; i <= passwordLength; i++;) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }

  if (!userChoice) {
    return;
  }

  var password = window.prompt("");
};

