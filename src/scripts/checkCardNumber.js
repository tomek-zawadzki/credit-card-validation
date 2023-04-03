import luhnAlgorithm from "./luhnAlgorithm.js";
import createCreditCard from "./createCreditCard.js";
import { showCardType } from "./createCreditCard.js";
import falseMessage from "./falseMessage.js";
import resetCard from "./resetCard.js";

const visaType = {
  name: "Visa",
  length: [13, 16],
  firstNums: 4,
  img: "src/img/Visa-Logo-PNG5.png",
};
const mastercardType = {
  name: "Mastercard",
  length: 16,
  firstNums: [22, 51, 52, 53, 54, 55],
  img: "src/img/Mastercard-Logo-PNG10.png",
};
const americanExpType = {
  name: "American Express",
  length: 15,
  firstNums: [34, 37],
  img: "src/img/american_express_logo.png",
};

const checkCardNumber = (cardNumber) => {
  resetCard();

  const cardNumLength = cardNumber.toString().length;
  const firstCreditCardNums = cardNumber
    .toString()
    .split("")
    .splice(0, 2)
    .join("");

  const checkCardNumber = /[0-9]/gm.test(cardNumber);

  const checkIfMastercard =
    mastercardType.firstNums.includes(parseInt(firstCreditCardNums)) &&
    cardNumLength === mastercardType.length &&
    checkCardNumber;

  const checkIfVisa =
    visaType.firstNums == firstCreditCardNums.split("").slice(0, 1).join() &&
    visaType.length.includes(cardNumLength) &&
    checkCardNumber;

  const checkIfAmericanExp =
    americanExpType.firstNums.includes(parseInt(firstCreditCardNums)) &&
    cardNumLength === americanExpType.length &&
    checkCardNumber;

  if (checkIfMastercard && luhnAlgorithm(cardNumber)) {
    createCreditCard(mastercardType.img, cardNumber, mastercardType.name);
    return showCardType(mastercardType);
  } else if (checkIfVisa && luhnAlgorithm(cardNumber)) {
    createCreditCard(visaType.img, cardNumber, visaType.name);
    return showCardType(visaType);
  } else if (checkIfAmericanExp && luhnAlgorithm(cardNumber)) {
    createCreditCard(americanExpType.img, cardNumber, americanExpType.name);
    return showCardType(americanExpType);
  } else {
    return falseMessage();
  }
};

export default checkCardNumber;
