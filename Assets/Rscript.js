// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbols = "!@#$%^&*_-+=";
var selectedCharacters = "";


// Write password to the #password input
generateBtn.addEventListener("click", generate); 
function generate(){
    // Input prompts
var passwordLength = prompt("How many characters? Min-8 Max-128");
    if (passwordLength >= 8 && passwordLength <= 128) {
     console.log (passwordLength);
  var upperC = confirm("Contain upper case characters?");
  var lowerC = confirm("Contain lower case characters?");
  var numbers = confirm("Contain numbers?");
  var symbol = confirm("Contain symbols?");
    if (upperC == true || lowerC == true || numbers == true || symbol ==true) {
        if (upperC == true) {
          selectedCharacters = selectedCharacters.concat(uppercase)
        }
        if (lowerC == true) {
          selectedCharacters = selectedCharacters.concat(lowercase)
        }
        if (numbers == true) {
          selectedCharacters = selectedCharacters.concat(number)
        }
        if (symbol == true) {
          selectedCharacters = selectedCharacters.concat(symbols)
        }
      console.log(selectedCharacters);
      generatePassword(passwordLength);
          }
}

//Taking the input information and putting it together
function generatePassword(length) {
  var result = '';
  var characters = selectedCharacters;
  var charactersLength = characters.length;
  for (var i = 0; i<length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  var passwordText = document.querySelector("#password");
  passwordText.textContent= result
  return
}
}