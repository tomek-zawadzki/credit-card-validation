import { creditCardInfo } from "./variables.js";
const resetCard = () => {
  const creditCardBox = document.querySelector(".card__box");
  creditCardInfo.innerHTML = "";
  if (creditCardBox) {
    creditCardBox.remove();
  }
};

export default resetCard;
