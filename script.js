// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    let newPassword = ""
    let length = prompt("From 8 - 128, how many characters would you like?")

    if (length >= 8 && length <= 128) {
        const lowercase = "abcdefghijklmnopqrstuvwxyz"
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const number = "1234567890"
        const specialChar = "!@#$%^&*()-+?/<>{}[]"


        const checkLowercase = confirm("Use lowercase letters?")
        const checkUppercase = confirm("Use uppercase letters?")
        const checkNumber = confirm("Use numbers?")
        const checkSpecialChar = confirm("Use special characters?")
        

        for (let i = 0; i < length; i++) {
            if (checkLowercase && newPassword.length < length) {
                let index = Math.floor(Math.random() * lowercase.length)
                newPassword = newPassword + lowercase[index]
            }
            if (checkUppercase && newPassword.length < length) {
                let index = Math.floor(Math.random() * uppercase.length)
                newPassword = newPassword + uppercase[index]
            }
            if (checkNumber && newPassword.length < length) {
                let index = Math.floor(Math.random() * number.length)
                newPassword = newPassword + number[index]
            }
            if (checkSpecialChar && newPassword.length < length) {
                let index = Math.floor(Math.random() * specialChar.length)
                newPassword = newPassword + specialChar[index]
            }

        }

    } else {
        alert("Invalid entry")
    }
    return newPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

