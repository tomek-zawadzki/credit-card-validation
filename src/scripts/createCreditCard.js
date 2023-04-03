import {
  creditCardElement,
  creditCardInfo,
  validationResult,
} from "./variables.js";

const createCreditCard = (src, cardNumber, cardName) => {
  const html = `
  <div class="card__box">
  <img
    class="card__logo"
    src="${src}"
    alt="${cardName} logo"
  />
  <p class="card__number">${cardNumber}</p>
</div>
`;

  creditCardElement.insertAdjacentHTML("afterbegin", html);
};

export const showCardType = (creditCardType) => {
  validationResult.style.visibility = "visible";
  validationResult.style.color = "green";
  validationResult.innerHTML = "Correct credit card number";
  creditCardInfo.style.display = "block";
  creditCardInfo.innerHTML = creditCardType.name;
};

export default createCreditCard;
