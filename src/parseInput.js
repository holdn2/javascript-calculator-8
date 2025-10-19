import { ERROR_MESSAGE, SEPERATOR } from './constants';

export default function parseInput(input) {
  if (
    !input.includes(SEPERATOR.CUSTOM_START) ||
    !input.includes(SEPERATOR.CUSTOM_END)
  ) {
    return { customSeperator: '', parsedInput: input };
  }

  if (!input.startsWith(SEPERATOR.CUSTOM_START)) {
    throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_START);
  }

  const match = input.match(SEPERATOR.CUSTOM_REGEX);
  if (!match) {
    throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_INDICATOR);
  }

  const customIndicator = match[0];
  const parsedInput = input.slice(customIndicator.length);
  const customSeperator = getCustomSeperator(customIndicator);

  return { customSeperator, parsedInput };
}

export function getCustomSeperator(customIndicator) {
  const match = customIndicator.match(SEPERATOR.CUSTOM_REGEX);
  if (!match) throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_INDICATOR);

  const customSeperator = match[1];

  if (customSeperator.length !== 1) {
    throw new Error(ERROR_MESSAGE.INVALID_SEPERATOR_LENGTH);
  }
  if (/^\d$/.test(customSeperator)) {
    throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_NUMBER);
  }
  if (
    customSeperator === SEPERATOR.DEFAULT_COMMA ||
    customSeperator === SEPERATOR.DEFAULT_COLON
  ) {
    throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_DEFAULT);
  }

  return customSeperator;
}
