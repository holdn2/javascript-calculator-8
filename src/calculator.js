import parseInput from './parseInput';
import { extractCustomSeperator, extractNumArr } from './utils';

export default function calculator(input) {
  const { customIndicator, parsedInput } = parseInput(input);

  const customSeperator = extractCustomSeperator(customIndicator);

  const stringNumberArray = extractNumArr(customSeperator, parsedInput);

  let sum = 0;
  stringNumberArray.map((number) => {
    sum += Number(number);
  });

  return sum;
}
