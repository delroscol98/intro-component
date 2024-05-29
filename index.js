const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});

const getErrorIconAndMsg = (element) => {
  const errorIcon = element
    .closest(".trial__form--box")
    .querySelector(".trial__form--error-icon");
  const errorMsg = element
    .closest(".trial__form--box")
    .querySelector(".paragraph--error");

  return [errorMsg, errorIcon];
};

const validateFirstName = () => {
  const [errorMsg, errorIcon] = getErrorIconAndMsg(firstName);
  const value = firstName.value.trim();
  if (value === "") {
    errorIcon.classList.add("invalid");
    errorMsg.classList.add("invalid");
  } else {
    errorIcon.classList.remove("invalid");
    errorMsg.classList.remove("invalid");
  }
};

const validateLastName = () => {
  const [errorMsg, errorIcon] = getErrorIconAndMsg(lastName);
  const value = lastName.value.trim();
  if (value === "") {
    errorIcon.classList.add("invalid");
    errorMsg.classList.add("invalid");
  } else {
    errorIcon.classList.remove("invalid");
    errorMsg.classList.remove("invalid");
  }
};

const validatePassword = () => {
  const [errorMsg, errorIcon] = getErrorIconAndMsg(password);
  const value = password.value.trim();
  if (value === "") {
    errorIcon.classList.add("invalid");
    errorMsg.classList.add("invalid");
  } else {
    errorIcon.classList.remove("invalid");
    errorMsg.classList.remove("invalid");
  }
};

const validateForm = () => {
  validateFirstName();
  validateLastName();
  validatePassword();
};
