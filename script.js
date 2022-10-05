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
        showError("mail");
    }
});

country.addEventListener("input", () => {
    if (country.validity.valid) {
        countryError.textContent = "";
    } else {
        showError("country");
    }
});

zip.addEventListener("input", () => {
    if (zip.validity.valid) {
        zipError.textContent = "";
    } else {
        showError("zip");
    }
});

password.addEventListener("input", () => {
    if (password.validity.valid) {
        passwordError.textContent = "";
    } else {
        showError("password");
    }
});

confirmPassword.addEventListener("input", () => {
    if (confirmPassword.validity.valid) {
        confirmPasswordError.textContent = "";
    } else {
        showError("confirmPassword");
    }
});

form.addEventListener("submit", (event) => {
    if (!mail.validity.valid) {
        showError("mail");
        event.preventDefault();
    } 
    
    if (!country.validity.valid) {
        showError("country");
        event.preventDefault();
    }

    if (!zip.validity.valid) {
        showError("zip");
        event.preventDefault();
    }

    if (!password.validity.valid) {
        showError("password");
        event.preventDefault();
    }

    if (!confirmPassword.validity.valid) {
        showError("confirmPassword");
        event.preventDefault();
    }
});

function showError(target) {
    if (target === "mail") {
        if (mail.validity.valueMissing) {
            mailError.textContent = "You need to enter an email address.";
        } else if (mail.validity.typeMismatch) {
            mailError.textContent = "It needs to be an email address.";
        } else if (mail.validity.tooShort) {
            mailError.textContent = "Please use at least 8 characters.";
        }
    }

    if (target === "country") {
        if (country.validity.valueMissing) {
            countryError.textContent = "You need to enter a country name.";
        }  else if (country.validity.patternMismatch) {
            countryError.textContent = "Only letters A-Z are allowed.";
        }  else if (country.validity.tooShort) {
            countryError.textContent = "Please use atleast 3 characters.";
        } else if (country.validity.tooLong) {
            countryError.textContent = "Only 20 characters are allowed";
        }
    }

    if (target === "zip") {
        if (zip.validity.valueMissing) {
            zipError.textContent = "You need to enter a zip code.";
        }
    }

   if (target === "password") {
        if (password.validity.valueMissing) {
            passwordError.textContent = "You need to enter a password.";
        }
   }
    
   if (target === "confirmPassword") {
         if (confirmPassword.validity.valueMissing) {
            confirmPasswordError.textContent = "Passwords did not match.";
        }
   }
}