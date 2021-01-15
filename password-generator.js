// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);

// Questions to get password characters
function generatePassword() {
    // Ensure password length is within requirements
     var pwlength = prompt("Please enter the length of your password. Note: Password required to be between 8-128 characters.")
    if(pwlength < 8) {
      prompt("Entry invalid. Passwords must be at least 8 characters. Please try again below.");
    }else if(pwlength > 128) {
      prompt("Entry invalid. Passwords must no more than 128 characters. Please try again below.");
    }else if(isNaN(pwlength) === true){
      prompt("Entry invalid. Please type in a number between 8-128. Please try again below.")
    }; 
    // Confirm that other characters will be used
    var lowerChar = confirm("Please confirm if you would like to use lowercase characters in your password.");
    var upperChar = confirm("Please confirm if you would also like to use uppercase characters in your password.");
    var numericChar = confirm("Please confirm if you would like to use numbers in your password.");
    var specialChar = confirm("Please confirm if you would like to use special characters (such as !, ?, or *) in your password.");


    // Function variable that includes each funtion to generate a random character (for each type of character) - values grabbed from the ASCII chart
    var selectFunction = {
      
      selectLowerChar: function(){
        return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
      },
      selectUpperChar: function (){
        return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      },
      selectNumericChar: function (){
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
      },
      // List the options for special characters (provided in the HW README file) before randomly generating
      selectSpecialChar: function (){
        const specialSelected = '!#$()*,-./:;<=>?@[]^_`{|}~';
        return specialSelected[Math.floor(Math.random() * specialSelected.length)];
      }
  };

    //Clear out the loop before running
    var passwordGenerated = "";
    for (let i = 0; i < pwlength; i ++){
      if (lowerChar === true){
        passwordGenerated += selectFunction.selectLowerChar();
      }
      if (upperChar === true){
        passwordGenerated += selectFunction.selectUpperChar();
      }
      if (numericChar === true){
        passwordGenerated += selectFunction.selectNumericChar();
      }
      if (specialChar === true){
        passwordGenerated += selectFunction.selectSpecialChar();
      }
    }
   
     // Stop function after password is generated
     return passwordGenerated.slice(0, pwlength);
}







