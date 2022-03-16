var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [" ", ".", "~", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", "/", "^", ",", ":", ";", "<", ">", "=", "?", "@", "[", "]", "|", "{", "}", "_", "`"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

var pwdChars = [];

var generatePassword = function () {
    confirmLength = window.prompt("How many characters would you like your password to contain?");

    while ((confirmLength <= 7) || (confirmLength >= 129)) {
        window.alert("Password length must be between 8 - 128 characters Try again");
        confirmLength = window.prompt("How many characters would you like your password to contain?");
    }

    window.alert(`Your password will have ${confirmLength} characters`);

    confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters");
    confirmNumericCharacter = window.confirm("Click OK to confirm if you would like to include numeric characters");
    confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters");
    confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters");

    while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one character type");
        confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters");
        confirmNumericCharacter = window.confirm("Click OK to confirm if you would like to include numeric characters");
        confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters");
        confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters");
    }

    var randomPwd = "";

    if (confirmSpecialCharacter) {
        pwdChars = [...pwdChars, ...special];
    }

    if (confirmNumericCharacter) {
        pwdChars = [...pwdChars, ...numbers];
    }

    if (confirmLowerCase) {
        pwdChars = [...pwdChars, ...lowerCase];
    }

    if (confirmUpperCase) {
        pwdChars = [...pwdChars, ...upperCase];
    }

    for (var i = 0; i < confirmLength; i++) {
        randomPwd = randomPwd + pwdChars[Math.floor(Math.random() * pwdChars.length)];
        console.log(randomPwd)
    }
    return randomPwd;
};

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);