const form = document.querySelector("form");
const nameField = document.querySelector("#name");
const lastNameField = document.querySelector("#lastName");
const emailField = document.querySelector("#email");
const phoneNumberField = document.querySelector("#phone");
const radioInputs = document.querySelectorAll("#estrato");
const inputs = document.querySelectorAll("input");

const expressions = {
  name: /^([a-zA-Z]+\s?){2}?$/,
  email: /^[a-zA-Z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]+$/,
  phoneNumber:
    /^(\+\d{2})?[\s\-]?(\d{3})[\s\-]?(\d{2,3})[\s\-]?(\d{2})[\s\-]?(\d{2})$/,
};

function validateForm(event) {
  switch (event.target.name) {
    case "name":
      if (expressions.name.test(event.target.value)) {
        nameField.classList.add("correctField");
        nameField.classList.remove("errorField");
      } else {
        nameField.classList.add("errorField");
        nameField.classList.remove("correctField");
      }
      break;
    case "lastName":
      if (expressions.name.test(event.target.value)) {
        lastNameField.classList.add("correctField");
        lastNameField.classList.remove("errorField");
      } else {
        lastNameField.classList.add("errorField");
        lastNameField.classList.remove("correctField");
      }
      break;
    case "email":
      if (expressions.email.test(event.target.value)) {
        emailField.classList.add("correctField");
        emailField.classList.remove("errorField");
      } else {
        emailField.classList.add("errorField");
        emailField.classList.remove("correctField");
      }
      break;
    case "phone":
      if (expressions.phoneNumber.test(event.target.value)) {
        phoneNumberField.classList.add("correctField");
        phoneNumberField.classList.remove("errorField");
      } else {
        phoneNumberField.classList.add("errorField");
        phoneNumberField.classList.remove("correctField");
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
