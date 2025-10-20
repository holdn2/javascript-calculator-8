export const INFORM_MESSAGE = {
  INPUT: '덧셈할 문자열을 입력해 주세요.\n',
  RESULT: '결과 : ',
};

export const ERROR_MESSAGE = {
  INVALID_CHARACTER:
    '[ERROR] 숫자와 구분자 이외의 다른 문자를 입력할 수 없습니다. (공백과 `.`도 일반 문자로 포함)',
  INVALID_CUSTOM_SEPARATOR_START:
    '[ERROR] 커스텀 구분자 지시자인 // 는 문자열 맨 앞에 위치해야 합니다.',
  INVALID_SEPARATOR_LENGTH: '[ERROR] 커스텀 구분자는 한 글자여야 합니다.',
  INVALID_CUSTOM_SEPARATOR_NUMBER:
    '[ERROR] 커스텀 구분자로 숫자를 지정할 수 없습니다.',
  INVALID_CUSTOM_SEPARATOR_DEFAULT:
    '[ERROR] ,과 :은 기본 구분자이므로 커스텀 구분자로 지정할 수 없습니다.',
  INVALID_START_END_CHARACTER:
    '[ERROR] 문자열의 맨 앞과 뒤는 숫자여야 합니다. (커스텀 구분자를 지정하기 위한 문자열 제외)',
  MISSING_NUMBER_BETWEEN_SEPARATORS:
    '[ERROR] 구분자가 연속으로 올 수 없습니다.',
};

export const SEPARATOR = {
  DEFAULT_COMMA: ',',
  DEFAULT_COLON: ':',
  CUSTOM_START: '//',
  CUSTOM_END: '\n',
};

export const REGEX = {
  CUSTOM_INDICATOR: /\/\/(.+)\n/,
  NUMBER: /\d/,
  ALLOWED_CHARS: (escapedSeparator = EMPTY_STRING) =>
    new RegExp(`^[0-9,:${escapedSeparator}]+$`),
  ALLOWED_NON_NUMBER: (escapedSeparator = '') =>
    new RegExp(`[,:${escapedSeparator}]`),
  REPEATED_NON_NUMBER: (escapedSeparator = '') =>
    new RegExp(`[,:${escapedSeparator}]{2,}`),
};

export const EMPTY_STRING = '';

export const EMPTY_INPUT_RESULT = 0;
