const visaType = {
  length: [13, 16],
  firstNums: 4,
};
const mastercardType = {
  length: 16,
  firstNums: [22, 51, 52, 53, 54, 55],
};
const americanExpressType = {
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

  cardNumLength;
  firstCreditCardNums;

  const checkIfMastercard =
    mastercardType.firstNums.includes(parseInt(firstCreditCardNums)) &&
    cardNumLength === mastercardType.length;

  const checkIfVisa =
    visaType.firstNums == firstCreditCardNums.split("").slice(0, 1).join() &&
    visaType.length.includes(cardNumLength);

  const checkIfAmericanEx =
    americanExpressType.firstNums.includes(parseInt(firstCreditCardNums)) &&
    cardNumLength === americanExpressType.length;

  if (checkIfMastercard) {
    console.log("mastercard");
  } else if (checkIfVisa) {
    console.log("visa");
  } else if (checkIfAmericanEx) {
    console.log("american express");
  }

  return cardNumber;
};

export default checkCardNumber;

console.log(checkCardNumber(2223016768739313));
