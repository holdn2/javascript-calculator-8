import { EMPTY_INPUT_RESULT, EMPTY_STRING } from './constants.js';
import parseInput from './parseInput.js';
import { extractCustomSeparator, extractNumArr } from './utils.js';

export default function calculator(input) {
  if (input === EMPTY_STRING) return EMPTY_INPUT_RESULT;

  const normalizedInput = input.replace(/\\n/g, '\n');

  const { customIndicator, parsedInput } = parseInput(normalizedInput);

  const customSeparator = extractCustomSeparator(customIndicator);

  const stringNumberArray = extractNumArr(customSeparator, parsedInput);

  const sum = stringNumberArray.reduce(
    (acc, number) => acc + Number(number),
    0,
  );

  return sum;
}
