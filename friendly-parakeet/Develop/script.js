// Assignment code here

//number variable
var numbers = ["0","1","2","3","4","5","6","7","8", "9"];

//special characters
var special = ["!", "%", "&", ",", ".", "*", "-", "?", "/", "<", ">", "~"]

//lowercase
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//uppercase
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function generatePassword() {
  var passwordLength = window.prompt(
    "How many characters would you like your password to contain?"
  );

  var numbers = window.confirm(
    "Click OK to confirm including numeric characters."
  );

  var lowerCase = window.confirm(
    "Click OK to confirm including lowercase characters."
  );

  var upperCase = window.confirm(
    "Click OK to confirm including uppercase characters."
  );

  var special = window.confirm(
    "Click OK to confirm including special characters."
  );

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
document.querySelector("#generate").addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword);

writePassword();
