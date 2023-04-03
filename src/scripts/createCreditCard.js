import { creditCardElement } from "./variables.js";

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

export default createCreditCard;
