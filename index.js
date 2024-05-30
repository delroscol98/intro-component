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

const validateNonEmptyInput = (
  element,
  getIconAndMsg = getErrorIconAndMsg,
  classStr = "invalid"
) => {
  const [msg, icon] = getIconAndMsg(element);
  const value = element.value.trim();

  value === ""
    ? (icon.classList.add(classStr), msg.classList.add(classStr))
    : (icon.classList.remove(classStr), msg.classList.remove(classStr));
};

const validateEmail = () => {
  const [errorMsg, errorIcon] = getErrorIconAndMsg(email);

  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  const emailValue = email.value.trim();

  !regx.test(emailValue)
    ? (errorIcon.classList.add("invalid"), errorMsg.classList.add("invalid"))
    : (errorIcon.classList.remove("invalid"),
      errorMsg.classList.remove("invalid"));
};

const validateForm = () => {
  validateNonEmptyInput(firstName);
  validateNonEmptyInput(lastName);
  validateEmail();
  validateNonEmptyInput(password);
};
