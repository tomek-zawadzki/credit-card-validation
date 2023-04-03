import { validationResult } from "./variables.js";

const falseMessage = () => {
  validationResult.style.visibility = "visible";
  validationResult.innerHTML = "Incorrect credit card number";
  validationResult.style.color = "red";
};

export default falseMessage;
