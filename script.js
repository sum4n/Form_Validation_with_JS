const form = document.querySelector("form");

const mail = document.getElementById("mail");
const mailError = document.querySelector(".mail-error");
const country = document.getElementById("country");
const countryError = document.querySelector(".country-error");
const zip = document.getElementById("zip");
const zipError = document.querySelector(".zip-error");
const password = document.getElementById("password");
const passwordError = document.querySelector(".password-error");
const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordError = document.querySelector(".confirmPassword-error");

const submitButton = document.querySelector("button");


mail.addEventListener("input", () => {
    if (mail.validity.valid) {
        mailError.textContent = "";
    } else {
        showError();
    }
});

country.addEventListener("input", () => {
    if (country.validity.valid) {
        countryError.textContent = "";
    } else {
        showError();
    }
});

zip.addEventListener("input", () => {
    if (zip.validity.valid) {
        zipError.textContent = "";
    } else {
        showError();
    }
});

password.addEventListener("input", () => {
    if (password.validity.valid) {
        passwordError.textContent = "";
    } else {
        showError();
    }
});

confirmPassword.addEventListener("input", () => {
    if (confirmPassword.validity.valid) {
        confirmPasswordError.textContent = "";
    } else {
        showError();
    }
});

form.addEventListener("submit", (event) => {
    if (!mail.validity.valid) {
        showError();
        event.preventDefault();
    } else if (!country.validity.valid) {
        showError();
        event.preventDefault();
    } else if (!zip.validity.valid) {
        showError();
        event.preventDefault();
    } else if (!password.validity.valid) {
        showError();
        event.preventDefault();
    } else if (!confirmPassword.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (mail.validity.valueMissing) {
        mailError.textContent = "You need to enter an email address.";
    } else if (mail.validity.typeMismatch) {
        mailError.textContent = "Entered value needs to be an email address.";
    }
    if (country.validity.valueMissing) {
        countryError.textContent = "You need to enter a country name.";
    }
    if (zip.validity.valueMissing) {
        zipError.textContent = "You need to enter a zip code.";
    }
    if (password.validity.valueMissing) {
        passwordError.textContent = "You need to enter a password.";
    }
    
    if (confirmPassword.validity.valueMissing) {
        confirmPasswordError.textContent = "You need to enter a matching password.";
    }
}