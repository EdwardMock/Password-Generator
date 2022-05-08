// Assignment code here
//Symbols " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var userNumber = function() {
  prompt("How many characters total do you want to include? Minimum of 8 and maximum of 128 characters");
  if (userNumber <8) alert("Please enter a number that is 8 or larger. Maximum of 128 characters")
  else if (userNumber > 128) alert("Please enter a number that is less than 128 characters. Minimum of 128 characters")
};

var userSymbol = function() {
  prompt("Should the password include symbols? Yes or No");
  if (userSymbol == "yes") userSymbol == "true";
  else if (userSymbol == "no") userSymbol == "false";
  else (userSymbol == ""); alert("Please enter yes or no for symbols")
  prompt("Should the password include symbols? Yes or No")
}

var userUppercase = function() {
  prompt("Should the password include upper case letters? Yes or No");
  if (userUppercase == "yes") userUppercase == "true";
  else if (userUppercase == "no") userUppercase == "false";
  else (userUppercase == ""); alert("Please enter yes or no for symbols")
  prompt("Should the password include symbols? Yes or No")
}

var userLowercase = function() {
  prompt("Should the password include upper case letters? Yes or No");
  if (userLowercase == "yes") userLowercase == "true";
  else if (userLowercase == "no") userLowercase == "false";
  else (userLowercase == ""); alert("Please enter yes or no for symbols")
  prompt("Should the password include symbols? Yes or No")
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
