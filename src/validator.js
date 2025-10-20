import { ERROR_MESSAGE, REGEX, SEPARATOR } from './constants.js';

export function validateRawInput(input) {
  if (
    !input.includes(SEPARATOR.CUSTOM_START) ||
    !input.includes(SEPARATOR.CUSTOM_END)
  ) {
    validateBoundaryNumbers(input);
    return;
  }

  if (!input.startsWith(SEPARATOR.CUSTOM_START)) {
    throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_SEPARATOR_START);
  }
}

export function validateCustomIndicator(match) {
  if (!match) {
    throw Error(ERROR_MESSAGE.INVALID_SEPARATOR_LENGTH);
  }
}

export function validateCustomSeparator(customSeparator) {
  if (customSeparator.length !== 1) {
    throw new Error(ERROR_MESSAGE.INVALID_SEPARATOR_LENGTH);
  }
  if (REGEX.NUMBER.test(customSeparator)) {
    throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_SEPARATOR_NUMBER);
  }
  if (
    customSeparator === SEPARATOR.DEFAULT_COMMA ||
    customSeparator === SEPARATOR.DEFAULT_COLON
  ) {
    throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_SEPARATOR_DEFAULT);
  }
}

export function validateParsedInput(escapedSepArator, parsedInput) {
  validateBoundaryNumbers(parsedInput);

  if (!REGEX.ALLOWED_CHARS(escapedSepArator).test(parsedInput)) {
    throw new Error(ERROR_MESSAGE.INVALID_CHARACTER);
  }

  if (REGEX.REPEATED_NON_NUMBER(escapedSepArator).test(parsedInput)) {
    throw new Error(ERROR_MESSAGE.MISSING_NUMBER_BETWEEN_SEPARATORS);
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
