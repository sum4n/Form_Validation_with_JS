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

form.addEventListener("input", (event) => {
    // Exclude confirm-password input eventlistener.
    if (event.target.id !== "confirm-password") {
        if (event.target.validity.valid) {
            // gets the error <p> and add remove error message.
            event.target.nextElementSibling.textContent = "";
        } else {
            showError(event.target.id);
            // console.log(event.target)
        }
    }
});

confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value === password.value) {
        confirmPasswordError.textContent = "";
    } else {
        showError("confirm-password");
    }
})


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

    if (confirmPassword.value !== password.value) {
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
        } else if (zip.validity.patternMismatch) {
            zipError.textContent = "Only 0-9 digits are allowed.";
        } else if (zip.validity.tooShort) {
            zipError.textContent = "Please input atleast 6 digits.";
        } else if (zip.validity.tooLong) {
            zipError.textContent = "Only 6 digits are allowed.";
        }
    }

   if (target === "password") {
        if (password.validity.valueMissing) {
            passwordError.textContent = "You need to enter a password.";
        } else if (password.validity.tooShort) {
            passwordError.textContent = "Password must contain 8 characters.";
        }
   }
    
   if (target === "confirm-password") {
         if (confirmPassword.validity.valueMissing) {
            confirmPasswordError.textContent = "Enter a password.";
        } else if (confirmPassword.value !== password.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
        }
   }
}