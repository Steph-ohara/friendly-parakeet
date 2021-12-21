// Assignment code here

function generatePassword() {
  var passwordLength = window.prompt("Enter the number of characters needed for your password. Must be more than 8 and less than 128.");

  var numbers = window.prompt("Do you want your password to contain numbers?");

  var lowerCase = window.prompt("Do you want lowercase characters in your password>");

  var upperCase = window.prompt("Do you want uppercase characters in your password?");

  var special = window.prompt("Do you want special characters in your password?");

  var minimumCount = 0;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);