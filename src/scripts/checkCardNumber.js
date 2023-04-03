const cardTypes = [
  {
    name: "Visa",
    info: {
      length: 13 || 16,
      firstNums: [4],
    },
  },
  {
    name: "Mastercard",
    info: {
      length: 16,
      firstNums: [51, 52, 53, 54, 55],
    },
  },
  {
    name: "American Express",
    info: {
      length: 15,
      firstNums: [34, 37],
    },
  },
];

const checkCardNummber = (cardNumber) => {
  const cardNumLength = cardNumber.toString().length;

  return cardNumber;
};

export default checkCardNummber;

console.log(checkCardNummber(5168760890992189));
