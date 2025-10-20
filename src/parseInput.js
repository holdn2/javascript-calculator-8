import { EMPTY_STRING, ERROR_MESSAGE, REGEX, SEPARATOR } from './constants.js';
import { normalizeInput } from './utils.js';
import { validateCustomIndicator, validateRawInput } from './validator.js';

export default function parseInput(input) {
  const normalizedInput = normalizeInput(input);

  validateRawInput(normalizedInput);

  if (!normalizedInput.startsWith(SEPARATOR.CUSTOM_START)) {
    return { customIndicator: EMPTY_STRING, parsedInput: normalizedInput };
  }

  const match = normalizedInput.match(REGEX.CUSTOM_INDICATOR);

  validateCustomIndicator(match);

  const customIndicator = match[0];
  const parsedInput = normalizedInput.slice(customIndicator.length);

  return { customIndicator, parsedInput };
}
