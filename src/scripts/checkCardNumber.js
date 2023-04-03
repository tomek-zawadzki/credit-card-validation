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

const veryficationAlgorithm = (cardNumber) => {
  const reverseCardNumber = cardNumber.toString().split("").reverse();

  const evenIndexNumbers = [];
  const oddIndexNumbers = [];

  reverseCardNumber.forEach((num, i) => {
    i % 2 ? oddIndexNumbers.push(num * 2) : evenIndexNumbers.push(num);
  });

  const preparedOddIndexNums = oddIndexNumbers.map((num) => {
    if (num > 9) {
      const newValues = num
        .toString()
        .split("")
        .reduce((prevNum, nextNum) => parseInt(prevNum) + parseInt(nextNum));
      return newValues;
    } else {
      return num;
    }
  });

  const summedAllValues =
    evenIndexNumbers.reduce(
      (prevNum, nextNum) => parseInt(prevNum) + parseInt(nextNum)
    ) +
    preparedOddIndexNums.reduce(
      (prevNum, nextNum) => parseInt(prevNum) + parseInt(nextNum)
    );

  const result = summedAllValues % 10 === 0;

  return result;
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

  if (checkIfMastercard && veryficationAlgorithm(cardNumber)) {
    console.log("mastercard");
  } else if (checkIfVisa && veryficationAlgorithm(cardNumber)) {
    console.log("visa");
  } else if (checkIfAmericanEx && veryficationAlgorithm(cardNumber)) {
    console.log("american express");
  }

  return cardNumber;
};

export default checkCardNumber;
