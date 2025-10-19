import { EMPTY_STRING, REGEX } from './constants';
import { validateParsedInput } from './validator';

export function extractCustomSeperator(customIndicator) {
  if (customIndicator === EMPTY_STRING) return EMPTY_STRING;
  const customSeperator = customIndicator.match(REGEX.CUSTOM_INDICATOR)[1];

  validateCustomSeperator(customSeperator);

  return customSeperator;
}

export function extractNumArr(customSeperator, parsedInput) {
  const escapedSeperator = customIndicator
    ? formatEscapedSeparator(customSeperator)
    : '';

  validateParsedInput(escapedSeperator, parsedInput);

  const numStringArr = parsedInput.split(
    REGEX.ALLOWED_NON_NUMBER(escapedSeperator),
  );

  return numStringArr;
}

function formatEscapedSeparator(customSeperator) {
  return customSeperator.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
