// Characters to use for the password
const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
const capitalCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// These are doubled to ensure the chances of getting these are equal.
const numbersCharacters = "01234567890123456789";
const symbolsCharacters = "!@#$%^&*!@#$%^&*!@#$%^&*";

function getPassword(form) {

    // Get the values from the form.
    let amount = form.characterAmount.value;

    const lowerLetters = form.smallLetters.checked;
    const capitalLetters = form.capitalLetters.checked;
    const numbers = form.numbers.checked;
    const symbols = form.symbols.checked;

    let charSet = "";

    // Make the list of charcters to pick the character from.
    if (lowerLetters) charSet = charSet + lowerCharacters;
    if (capitalLetters) charSet = charSet + capitalCharacters;
    if (numbers) charSet = charSet + numbersCharacters;
    if (symbols) charSet = charSet + symbolsCharacters;

    if (charSet === "") charSet = charSet + lowerCharacters;

    let password = "";

    // Generate the password.
    for (let i = 0; i < amount; i++) {
        const rndChar = charSet.charAt(Math.floor(Math.random() * charSet.length));
        password = password + rndChar;
    }

    const element = document.getElementById("password");
    element.innerHTML = password;

    getPasswordStrength(password);
}

function getDefaultPassword() {

    console.log("getdefualt")

    const charSet = lowerCharacters + capitalCharacters + numbersCharacters + symbolsCharacters;

    let password = "";

    // Generate the password.
    for (let i = 0; i < 15; i++) {
        const rndChar = charSet.charAt(Math.floor(Math.random() * charSet.length));
        password = password + rndChar;
    }

    const element = document.getElementById("password");
    element.innerHTML = password;

    getPasswordStrength(password);
}

function getPasswordStrength(password) {
    var strength = 0;
    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
        strength += 1;

    }

    switch (strength) {
        case 0:
            setPasswordStrengthColor("black");
            break;

        case 1:
            setPasswordStrengthColor("red");
            break;

        case 2:
            setPasswordStrengthColor("orange");
            break;

        case 3:
            setPasswordStrengthColor("rgb(214, 218, 19)");
            break;

        case 4:
            setPasswordStrengthColor("rgb(0, 190, 48)");
            break;
    }
}

function setPasswordStrengthColor(color) {
    const box = document.getElementById("passwordBox");
    box.style.borderBottom = `8px solid ${color}`;
}