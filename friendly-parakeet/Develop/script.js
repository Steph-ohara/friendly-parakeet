// Assignment code here

var numbers = ["0","1","2","3","4","5","6","7","8", "9"];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var special = ["!", "%", "&", ",", ".", "*", "-", "?", "/", "<", ">", "~"]

var confirmLength = "";
var confirmNumbers;
var confirmUpperCase;
var ConfirmLowerCase;
var confirmSpecial;


function generatePassword() {
  var passwordLength = window.prompt(
    "How many characters would you like your password to contain?"
  );

  while(confirmLength <=7 || confirmLength >= 129) {
    alert("Password length must be between 8-128 characters");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  };

  alert(`Your password will have ${confirmLength} characters`);

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

  while(confirmUpperCase === false && ConfirmLowerCase === false & confirmSpecial === false && confirmNumbers === false) {
    alert("You must choose at least one parameter");
    var confirmNumbers = confirm("Click OK to confirm including numeric characters.");
    var confirmLowerCase = confirm("Click OK to confirm including lowercase characters.");
    var confirmUpperCase = confirm("Click OK to confirm including uppercase characters.");
    var confirmSpecial = confirm("Click OK to confirm including special characters.");
  };

  var passwordCharacters = [];

  if(confirmNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers);
  };

  if(confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCase);
  };

  if(confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCase);
  };

  if(confirmSpecial) {
    passwordCharacters = passwordCharacters.concat(special);
  };

  console.log(passwordCharacters);

  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword);
  };

  return randomPassword;

};

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
