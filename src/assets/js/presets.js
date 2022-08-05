function setEasyToSay() {
    const lowerCaseCheckbox = document.getElementById("smallLetters");
    const upperCaseCheckbox = document.getElementById("capitalLetters");
    const numberCheckbox = document.getElementById("numbers");
    const symbolCheckbox = document.getElementById("symbols");

    lowerCaseCheckbox.checked = true;
    upperCaseCheckbox.checked = true;
    numberCheckbox.checked = false;
    symbolCheckbox.checked = false;
    numberCheckbox.disabled = true;
    symbolCheckbox.disabled = true;

    const easySay = document.getElementById("easySay");
    const easyRemember = document.getElementById("easyRemember");
    const mostSecure = document.getElementById("mostSecure");
    
    easySay.checked = true;
    easyRemember.checked = false;
    mostSecure.checked = false;
}

function setEasyRemember() {
    const lowerCaseCheckbox = document.getElementById("smallLetters");
    const upperCaseCheckbox = document.getElementById("capitalLetters");
    const numberCheckbox = document.getElementById("numbers");
    const symbolCheckbox = document.getElementById("symbols");

    lowerCaseCheckbox.checked = true;
    upperCaseCheckbox.checked = true;
    numberCheckbox.checked = false;
    symbolCheckbox.checked = false;
    numberCheckbox.disabled = false;
    symbolCheckbox.disabled = false;

    const easySay = document.getElementById("easySay");
    const easyRemember = document.getElementById("easyRemember");
    const mostSecure = document.getElementById("mostSecure");
    
    easySay.checked = false;
    easyRemember.checked = true;
    mostSecure.checked = false;
}

function setMostSecure() {
    console.log("SetMostSecuire")
    const lowerCaseCheckbox = document.getElementById("smallLetters");
    const upperCaseCheckbox = document.getElementById("capitalLetters");
    const numberCheckbox = document.getElementById("numbers");
    const symbolCheckbox = document.getElementById("symbols");

    lowerCaseCheckbox.checked = true;
    upperCaseCheckbox.checked = true;
    numberCheckbox.checked = true;
    symbolCheckbox.checked = true;
    
    numberCheckbox.disabled = false;
    symbolCheckbox.disabled = false;

    const easySay = document.getElementById("easySay");
    const easyRemember = document.getElementById("easyRemember");
    const mostSecure = document.getElementById("mostSecure");
    
    easySay.checked = false;
    easyRemember.checked = false;
    mostSecure.checked = true;
}