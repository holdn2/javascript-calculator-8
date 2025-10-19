import { EMPTY_STRING, REGEX, SEPERATOR } from './constants.js';
import { validateRawInput } from './validator.js';

export default function parseInput(input) {
  validateRawInput(input);

  if (!input.startsWith(SEPERATOR.CUSTOM_START)) {
    return { customIndicator: EMPTY_STRING, parsedInput: input };
  }

  const match = input.match(REGEX.CUSTOM_INDICATOR);

  const customIndicator = match[0];
  const parsedInput = input.slice(customIndicator.length);

  return { customIndicator, parsedInput };
}
