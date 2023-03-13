// Assignment Code
var generateBtn = document.querySelector("#generate");

var Length;
var Lower;
var Upper;
var Special;
var Choices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "*", "/", " < ", " > ", " ? ", "@", "_", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  Length = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + Length);
  if(!Length) {
    alert("Required value");
  } else if (Length < 8 || Length > 128) {
    Length = prompt("You must choose between 8 and 128");
    console.log("Password length " + Length);  
  } else { 
    Lower = confirm("Need lower case letters?");
    console.log("Lower case " + Lower);
    Upper = confirm("Need upper case letters?");
    console.log("Upper case " + Upper);
    Number = confirm("Need numbers?");
    console.log("Number " + Number);
    Special = confirm("Need special characters?");
    console.log("Special Character " + Special);
  };
  if (!Lower && !Upper && !Number && !Special) {
    Choices = alert("Gotta pick something :)");
  } else if (Lower && Upper && Number && Special) {
    Choices = lowerCase.concat(upperCase, numbers, special);
    console.log(Choices);
  }
  else if (Lower && Upper && Number) {
    Choices = lowerCase.concat(upperCase, numbers);
    console.log(Choices);
  }
  else if (Lower && Upper && Special) {
    Choices = lowerCase.concat(upperCase, special);
    console.log(Choices);
  }
  else if (Lower && Number && Special) {
    Choices = lowerCase.concat(numbers, special);
    console.log(Choices);
  }
  else if (Upper && Number && Special) {
    Choices = upperCase.concat(numbers, special);
    console.log(Choices);
  }
  else if (Lower && Upper) {
    Choices = lowerCase.concat(upperCase);
    console.log(Choices);
  }
  else if (Lower && Number) {
    Choices = lowerCase.concat(numbers);
    console.log(Choices);
  }
  else if (Lower && Special) {
    Choices = lowerCase.concat(special);
    console.log(Choices);
  }
  else if (Upper && Number) {
    Choices = upperCase.concat(numbers);
    console.log(Choices);
  }
  else if (Upper && Special) {
    Choices = upperCase.concat(special);
    console.log(Choices);
  }
  else if (Number && Special) {
    Choices = numbers.concat(special);
    console.log(Choices);
  }
  else if (Lower) {
    Choices = lowerCase;
    console.log(Choices);
  }
  else if (Upper) {
    Choices = blankUpper.concat(upperCase);
    console.log(Choices);
  }
  else if (Number) {
    Choices = numbers;
    console.log(Choices);
  }
  else if (Special) {
    Choices = special;
    console.log(Choices);
  };

  var passwordBlank = [];
  
  for (var i = 0; i < Length; i++) {
    var allChoices = Choices[Math.floor(Math.random() * Choices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}