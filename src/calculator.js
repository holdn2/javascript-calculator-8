import { EMPTY_INPUT_RESULT, EMPTY_STRING } from './constants.js';
import parseInput from './parseInput.js';
import { extractCustomSeperator, extractNumArr } from './utils.js';

export default function calculator(input) {
  if (input === EMPTY_STRING) return EMPTY_INPUT_RESULT;

  const { customIndicator, parsedInput } = parseInput(input);

  const customSeperator = extractCustomSeperator(customIndicator);

  const stringNumberArray = extractNumArr(customSeperator, parsedInput);

  let sum = 0;
  stringNumberArray.map((number) => {
    sum += Number(number);
  });

  return sum;
}
