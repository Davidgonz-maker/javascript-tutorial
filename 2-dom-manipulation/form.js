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
  const {
    name: NAME_REGEX,
    email: EMAIL_REGEX,
    phoneNumber: PHONE_REGEX,
  } = REGULAR_EXPRESSIONS;
  const {
    target: { value, name },
  } = event;

  switch (name) {
    case "name":
      validateText(NAME_REGEX, value, nameField);
      break;
    case "lastName":
      validateText(NAME_REGEX, value, lastNameField);
      break;
    case "email":
      validateText(EMAIL_REGEX, value, emailField);
      break;
    case "phone":
      validateText(PHONE_REGEX, value, phoneNumberField);
      break;
  }
}

function validateText(regex, text, textElement) {
  if (regex.test(text)) {
    textElement.classList.add(CORRECT_FIELD);
    textElement.classList.remove(ERROR_FIELD);
    return;
  }
  textElement.classList.add(ERROR_FIELD);
  textElement.classList.remove(CORRECT_FIELD);
}

inputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);
  input.addEventListener("blur", validateForm);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  for (const radio of radioInputs) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }
});
