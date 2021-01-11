// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  var pwlength = parseInt(prompt('How many chars?'));
  console.log(typeof pwlength);
  console.log();
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
