const luhnAlgorithm = (cardNumber) => {
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

export default luhnAlgorithm;
