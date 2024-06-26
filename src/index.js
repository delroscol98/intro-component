/**
 * Form
 * @type {Element}
 */
const form = document.querySelector("form");

/**
 * First name
 * @type {Element}
 */
const firstName = document.getElementById("first-name");

/**
 * Last name
 * @type {Element}
 */
const lastName = document.getElementById("last-name");

/**
 * Email
 * @type {Element}
 */
const email = document.getElementById("email");

/**
 * Password
 * @type {Element}
 */
const password = document.getElementById("password");

/**
 * Gets error icon and error message from input box
 * @param {Element} element
 * @returns {Array<Element>}
 */
const getErrorIconAndMsg = (element) => {
  const errorIcon = element
    .closest(".trial__form--box")
    .querySelector(".trial__form--error-icon");
  const errorMsg = element
    .closest(".trial__form--box")
    .querySelector(".paragraph--error");

  return [errorMsg, errorIcon];
};

/**
 * Validates inputs empty/non-empty inputs
 * @param {Element} element
 * @param {Function} getIconAndMsg
 * @param {String} classStr
 */
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

/**
 * Validates email inputs
 */
const validateEmail = () => {
  const [errorMsg, errorIcon] = getErrorIconAndMsg(email);

  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  const emailValue = email.value.trim();

  !regx.test(emailValue)
    ? (errorIcon.classList.add("invalid"), errorMsg.classList.add("invalid"))
    : (errorIcon.classList.remove("invalid"),
      errorMsg.classList.remove("invalid"));
};

/**
 * Validates the form inputs
 */
const validateForm = () => {
  validateNonEmptyInput(firstName);
  validateNonEmptyInput(lastName);
  validateEmail();
  validateNonEmptyInput(password);
};

/**
 * Initiates form validation
 */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});
