// Characters to use for the password
const baseCharacters = "abcdefghijklmnopqrstuvwxyz";
const capitalCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// These are doubled to ensure the chances of getting these are equal.
const numbersCharacters = "01234567890123456789";
const symbolsCharacters = "!@#$%^&*!@#$%^&*!@#$%^&*";

function getPassword(form) {

    // Get the values from the form.
    let amount = form.amountCharacters.value;
    if (amount < 2) amount = 2;
    if (amount > 100) amount = 100;

    const capitalLetters = form.capitalLetters.checked;
    const numbers = form.numbers.checked;
    const symbols = form.symbols.checked;

    let charSet = baseCharacters;

    // Make the list of charcters to pick the character from.
    if (capitalLetters) charSet = charSet + capitalCharacters;
    if (numbers) charSet = charSet + numbersCharacters;
    if (symbols) charSet = charSet + symbolsCharacters;

    let password = "";

    // Generate the password.
    for (let i = 0; i < amount; i++) {
        const rndChar = charSet.charAt(Math.floor(Math.random() * charSet.length));
        password = password + rndChar;
    }

    const element = document.getElementById("password");
    element.innerHTML = password;
}