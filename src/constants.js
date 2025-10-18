export const INFORM_MESSAGE = {
  INPUT: "덧셈할 문자열을 입력해 주세요.\n",
  RESULT: "결과 : ",
};

export const ERROR_MESSAGE = {
  INVALID_CHARACTER:
    "[ERROR] 숫자와 구분자 이외의 다른 문자를 입력할 수 없습니다. (공백과 `.`도 일반 문자로 포함)",
  INVALID_SEPERATOR_LENGTH: "[ERROR] 커스텀 구분자는 한 글자여야 합니다.",
  INVALID_CUSTOM_SEPERATOR_NUMBER:
    "[ERROR] 커스텀 구분자로 숫자를 지정할 수 없습니다.",
  INVALID_CUSTOM_SEPERATOR_DEFAULT:
    "[ERROR] ,과 :은 기본 구분자이므로 커스텀 구분자로 지정할 수 없습니다.",
  INVALID_START_END_CHARACTER:
    "[ERROR] 문자열의 맨 앞과 맨 뒤는 숫자여야 합니다. (커스텀 구분자를 지정하기 위한 문자열 제외)",
  MISSING_NUMBER_BETWEEN_SEPERATORS:
    "[ERROR] 구분자 사이에는 숫자가 반드시 있어야 합니다.",
};

export const SEPERATOR = {
  DEFAULT_COMMA: ",",
  DEFAULT_COLONE: ":",

  CUSTOM_START: "//",
  CUSTOM_END: "\\n",
};

export const EMPTY_INPUT_VALUE = 0;
