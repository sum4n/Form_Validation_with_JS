const form = document.querySelector("form");

const mail = document.getElementById("mail");
const mailError = document.querySelector(".mail-error");
const country = document.getElementById("country");


const submitButton = document.querySelector("button");


mail.addEventListener("input", (event) => {
    if (mail.validity.valid) {
        mailError.textContent = "";
    } else {
        showError();
    }
});

form.addEventListener("submit", (event) => {
    if (!mail.validity.valid) {
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
}