import { cardNumInput, checkBtn } from "./src/scripts/variables.js";
import checkCardNumber from "./src/scripts/checkCardNumber.js";

checkBtn.addEventListener("click", () => {
  checkCardNumber(cardNumInput.value);
});
