import { ERROR_MESSAGE, REGEX, SEPERATOR } from './constants';

export function validateRawInput(input) {
  if (
    !input.includes(SEPERATOR.CUSTOM_START) ||
    !input.includes(SEPERATOR.CUSTOM_END)
  ) {
    validateBoundaryNumbers(input);
    return;
  }

  if (!input.startsWith(SEPERATOR.CUSTOM_START)) {
    throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_START);
  }
}

function validateBoundaryNumbers(input) {
  if (
    !REGEX.NUMBER.test(input.charAt(0)) ||
    !REGEX.NUMBER.test(input.slice(-1))
  ) {
    throw new Error(ERROR_MESSAGE.INVALID_START_END_CHARACTER);
  }
}

export function validateCustomSeperator(customSeperator) {
  if (customSeperator.length !== 1) {
    throw new Error(ERROR_MESSAGE.INVALID_SEPERATOR_LENGTH);
  }
  if (REGEX.NUMBER.test(customSeperator)) {
    throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_NUMBER);
  }
  if (
    customSeperator === SEPERATOR.DEFAULT_COMMA ||
    customSeperator === SEPERATOR.DEFAULT_COLON
  ) {
    throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_DEFAULT);
  }
}
