import { REGULAR_EXPRESSIONS } from "./regularExpressions";

const form = document.querySelector(".form");
const nameField = document.querySelector("#name");
const lastNameField = document.querySelector("#lastName");
const emailField = document.querySelector("#email");
const phoneNumberField = document.querySelector("#phone");
const radioInputs = document.querySelectorAll("[name=layer]");
const inputs = document.querySelectorAll("input");

const CORRECT_FIELD = "correctField";
const ERROR_FIELD = "errorField";

function validateForm(event) {
  switch (event.target.name) {
    case "name":
      if (REGULAR_EXPRESSIONS.name.test(event.target.value)) {
        nameField.classList.add(CORRECT_FIELD);
        nameField.classList.remove(ERROR_FIELD);
      } else {
        nameField.classList.add(ERROR_FIELD);
        nameField.classList.remove(CORRECT_FIELD);
      }
      break;
    case "lastName":
      if (REGULAR_EXPRESSIONS.name.test(event.target.value)) {
        lastNameField.classList.add(CORRECT_FIELD);
        lastNameField.classList.remove(ERROR_FIELD);
      } else {
        lastNameField.classList.add(ERROR_FIELD);
        lastNameField.classList.remove(CORRECT_FIELD);
      }
      break;
    case "email":
      if (REGULAR_EXPRESSIONS.email.test(event.target.value)) {
        emailField.classList.add(CORRECT_FIELD);
        emailField.classList.remove(ERROR_FIELD);
      } else {
        emailField.classList.add(ERROR_FIELD);
        emailField.classList.remove(CORRECT_FIELD);
      }
      break;
    case "phone":
      if (REGULAR_EXPRESSIONS.phoneNumber.test(event.target.value)) {
        phoneNumberField.classList.add(CORRECT_FIELD);
        phoneNumberField.classList.remove(ERROR_FIELD);
      } else {
        phoneNumberField.classList.add(ERROR_FIELD);
        phoneNumberField.classList.remove(CORRECT_FIELD);
      }
      break;
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);
  input.addEventListener("blur", validateForm);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let selectedValue;
  for (const radio of radioInputs) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }
});
