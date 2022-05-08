// Assignment code here

var userLength = Number(window.prompt("How many characters total do you want to include? Minimum of 8 and maximum of 128 characters", "8"));
  if ((userLength <7)) {window.alert("Error: Please enter a number between 8 and 128");}
  else if ((userLength >129)) {window.alert("Error: Please enter a number between 8 and 128");} 
  else (userLength > 7 === 129);
console.log(userLength);

var userNumber = (window.confirm("Should the password include numbers? Yes or No", "yes"));
console.log(userNumber);

var userSymbol = (window.confirm("Should the password include symbols? Yes or No", "yes"));
console.log(userSymbol);

var userUppercase = (window.confirm("Should the password include upper-case letters? Yes or No", "yes"));
console.log(userUppercase);

var userLowercase = (window.confirm("Should the password include lower-case letters? Yes or No"));
console.log(userLowercase);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
function generatePassword() {
  var passLength = (userLength,number);
  var numberSet = '0123456789';
  var symbolSet = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var upperClassSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerClassSet = 'abcdefghijklmnopqrstuvwxyz';

  
  if (userNumber) numberSet; 
  else if (userSymbol == true) symbolSet;
  else if (userUppercase == true) upperClassSet;
  else if (userLowercase == true) lowerClassSet;

  

  document.getElementById("button").disabled("false")
  generateBtn.addEventListener("click", generatePassword);
}