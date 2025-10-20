import { EMPTY_STRING, REGEX } from './constants.js';
import { validateCustomSeparator, validateParsedInput } from './validator.js';

export function extractCustomSeparator(customIndicator) {
  if (customIndicator === EMPTY_STRING) return customIndicator;
  const customSeparator = customIndicator.match(REGEX.CUSTOM_INDICATOR)[1];

  validateCustomSeparator(customSeparator);

  return customSeparator;
}

export function extractNumArr(customSeparator, parsedInput) {
  const escapedSeparator = customSeparator
    ? formatEscapedSeparator(customSeparator)
    : EMPTY_STRING;

  validateParsedInput(escapedSeparator, parsedInput);

  const numStringArr = parsedInput.split(
    REGEX.ALLOWED_NON_NUMBER(escapedSeparator),
  );

  return numStringArr;
}

function formatEscapedSeparator(customSeparator) {
  return customSeparator.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
