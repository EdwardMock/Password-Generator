// Assignment code here



  password = writePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
document.getElementById(button).setProperty('button', ['disabled = false']).addEventListener('button', 'clicked'), generatePassword(); //Couldn't get this working
 

function generatePassword() 
  {
    var userLength = Number(window.prompt("How many characters total do you want to include? \n Minimum of 8 and maximum of 128 characters"));
      if ((userLength <7)) {window.alert("Error: Please enter a number between 8 and 128");}
      else if ((userLength >129)) {window.alert("Error: Please enter a number between 8 and 128");} 
      //Need to figure out how to prevent user from continuing after error alert
      else (userLength > 7 === 129); //not sure this is doing anything
    console.log(userLength);
    
    var userNumber = (window.confirm("Should the password include numbers? \n Ok for Yes, Cancel for No"));
    console.log(userNumber);
    
    var userSymbol = (window.confirm("Should the password include symbols? \n Ok for Yes, Cancel for No"));
    console.log(userSymbol);
    
    var userUppercase = (window.confirm("Should the password include upper-case letters? \n Ok for Yes, Cancel for No"));
    console.log(userUppercase);
    
    var userLowercase = (window.confirm("Should the password include lower-case letters? \n Ok for Yes, Cancel for No"));
    console.log(userLowercase);
    
    var passLength = (userLength);
    var numberSet = '0123456789';
    var symbolSet = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    var upperClassSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerClassSet = 'abcdefghijklmnopqrstuvwxyz';
    
    var characterSet = [numberSet + upperClassSet + lowerClassSet + symbolSet];
      console.log(characterSet, )

      //logic below is broken currently, still working this part out... been looking at various password generator functions and experimenting
      for (var i = 0; i < passLength; i++) {
        characterSet = Math.floor(Math.random() *(userLength - 1));
        passwordText += toString((characterSet));
      }
    return passwordText;
  }