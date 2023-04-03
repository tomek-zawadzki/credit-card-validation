import luhnAlgorithm from "./luhnAlgorithm.js";
import createCreditCard from "./createCreditCard.js";
import { showCardType } from "./createCreditCard.js";
import falseMessage from "./falseMessage.js";
import resetCard from "./resetCard.js";

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
  resetCard();

  //   if (/[0-9]/gm.test(cardNumber)) {
  //     return cardNumber;
  //   } else {
  //     return falseMessage();
  //   }

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

  const checkIfAmericanEx =
    americanExpressType.firstNums.includes(parseInt(firstCreditCardNums)) &&
    cardNumLength === americanExpressType.length &&
    checkCardNumber;

  if (checkIfMastercard && luhnAlgorithm(cardNumber)) {
    createCreditCard(
      "src/img/Mastercard-Logo-PNG10.png",
      cardNumber,
      mastercardType.name
    );
    return showCardType(mastercardType);
  } else if (checkIfVisa && luhnAlgorithm(cardNumber)) {
    createCreditCard("src/img/Visa-Logo-PNG5.png", cardNumber, visaType.name);
    return showCardType(visaType);
  } else if (checkIfAmericanEx && luhnAlgorithm(cardNumber)) {
    createCreditCard(
      "src/img/American_Express_(10).png",
      cardNumber,
      americanExpressType.name
    );
    return showCardType(americanExpressType);
  } else {
    return falseMessage();
  }
};

export default checkCardNumber;
