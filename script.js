//    ACCEPTANCE CRITERIA 
//GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and / or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {

  // Need a variable to store the password as it's being built!
  let newPassword = ""
  // Need a variable for our mega-array of characters
  let megaArray = ""
  // Need to ask the user how long the password should be

  // prompt("How many characters would you like in your password from 8 to 128?") 

  // prompt()
  let length = prompt("How many characters would you like in your password from 8 to 128?")

  if (length >= 8 && length <= 128) {
    // ^ that needs to be stored in a variable
    // Confirm whether to use uppercase letters, lowercase letters, numbers, and/or special characters
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const specialChar = "!@#$%^&*()-+?/"
    const checkLowercase = confirm("Do you want lowercase in your password?")
    const checkUppercase = confirm("Do you want uppercase in your password?")
    const checkNums = confirm("Do you want numbers in your password?")
    const checkSpecialChar = confirm("Do you want special characters in your password?")


    for (let i = 0; i < length; i++) {

      if (checkLowercase && newPassword.length < length) {
        let index = Math.floor(Math.random() * lowercase.length)
        newPassword = newPassword + lowercase[index]
      }

      if (checkUppercase && newPassword.length < length) {
        let index = Math.floor(Math.random() * uppercase.length)
        newPassword = newPassword + uppercase[index]
      }

      if (checkNums && newPassword.length < length) {
        let index = Math.floor(Math.random() * numbers.length)
        newPassword = newPassword + numbers[index]
      }

      if (checkSpecialChar && newPassword.length < length) {
        let index = Math.floor(Math.random() * specialChar.length)
        newPassword = newPassword + specialChar[index]
      }
    }
    // ^ each of those needs to be stored in a variable
    // Need to check whether the user selected a valid password length
    // Need to check whether the user selected at least one character type
    // If not, prompt them again OR alert that the input wasn't valid and start over
    // Need to make sure that at least one character is chosen from each character type
    // When the user selects a character type, generate a random character from that character set and concatenate it to the unfinished password

    // Generate a random character: Math.floor(Math.random() * array.length) gives me the random index, NOT the random character!
    // Can use .charAt()
    // OR array[Math.floor(Math.random() * array.length)]
    // Once we have the actual character, concatenate it to the variable that's storing our unfinished password
    // Push that character set to the mega-array
    // Once we have our mega-array:
    // for loop:
    // Generate a random character: Math.floor(Math.random() * megaArray.length) gives me the random index, NOT the random character!
    // Can use .charAt()
    // OR array[Math.floor(Math.random() * megaArray.length)]
    // Once we have the actual character, concatenate it to the variable that's storing our unfinished password
    // Start at i = unfinishedPassword.length
    // Go as long as i < passwordLength
    // return unfinishedPassword

  } else {
    alert("Invalid entry")

  }

  return newPassword

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// i dunno
