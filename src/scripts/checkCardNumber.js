import luhnAlgorithm from "./luhnAlgorithm.js";
import createCreditCard from "./createCreditCard.js";

const visaType = {
  name: "Visa",
  length: [13, 16],
  firstNums: 4,
};
const mastercardType = {
  name: "Mastercard",
  length: 16,
  firstNums: [22, 51, 52, 53, 54, 55],
};
const americanExpressType = {
  name: "American Express",
  length: 15,
  firstNums: [34, 37],
};

const checkCardNumber = (cardNumber) => {
  const cardNumLength = cardNumber.toString().length;
  const firstCreditCardNums = cardNumber
    .toString()
    .split("")
    .splice(0, 2)
    .join("");

  const checkIfMastercard =
    mastercardType.firstNums.includes(parseInt(firstCreditCardNums)) &&
    cardNumLength === mastercardType.length;

  const checkIfVisa =
    visaType.firstNums == firstCreditCardNums.split("").slice(0, 1).join() &&
    visaType.length.includes(cardNumLength);

  const checkIfAmericanEx =
    americanExpressType.firstNums.includes(parseInt(firstCreditCardNums)) &&
    cardNumLength === americanExpressType.length;

  if (checkIfMastercard && luhnAlgorithm(cardNumber)) {
    createCreditCard(
      "src/img/Mastercard-Logo-PNG10.png",
      cardNumber,
      mastercardType.name
    );
    return;
  } else if (checkIfVisa && luhnAlgorithm(cardNumber)) {
    createCreditCard("src/img/Visa-Logo-PNG5.png", cardNumber, visaType.name);
    return;
  } else if (checkIfAmericanEx && luhnAlgorithm(cardNumber)) {
    createCreditCard(
      "src/img/American_Express_(10).png",
      cardNumber,
      americanExpressType.name
    );

    return;
  } else {
    return false;
  }
};

export default checkCardNumber;
