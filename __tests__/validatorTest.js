import { ERROR_MESSAGE } from '../src/constants';
import {
  validateCustomSeperator,
  validateParsedInput,
  validateRawInput,
} from '../src/validator';

describe('validateRawInput', () => {
  test('커스텀 지시자가 하나도 포함되지 않은 경우, 앞뒤 글자가 숫자가 아니면 에러를 발생시킨다.', () => {
    const input = '6,5,';

    expect(() => {
      validateRawInput(input);
    }).toThrow(ERROR_MESSAGE.INVALID_START_END_CHARACTER);
  });

  test('커스텀 지시자가 하나도 포함되지 않는 경우, 앞뒤 글자가 숫자면 아무 동작을 하지 않는다.', () => {
    const input = '6,3/5';
    expect(() => {
      validateRawInput(input).not.toThrow();
    });
  });

  test('커스텀 지시자가 모두 포함된 경우 // 가 맨 앞에 있지 않으면 에러를 발생시킨다.', () => {
    const input = '5//;\n6:3';

    expect(() => {
      validateRawInput(input);
    }).toThrow(ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_START);
  });

  test('커스텀 지시자가 모두 포함된 경우 // 가 맨 앞에 있으면 아무 동작을 하지 않는다.', () => {
    const input = '//5;\n6:3';

    expect(() => {
      validateRawInput(input);
    }).not.toThrow();
  });
});

describe('validateCustomSeperator', () => {
  test('커스텀 구분자의 길이가 1보다 크다면 에러를 발생시킨다.', () => {
    const customSeperator = '-.';

    expect(() => {
      validateCustomSeperator(customSeperator);
    }).toThrow(ERROR_MESSAGE.INVALID_SEPERATOR_LENGTH);
  });

  test('커스텀 구분자 지시자 사이가 비어 있다면 에러를 발생시킨다.', () => {
    const customSeperator = '';

    expect(() => {
      validateCustomSeperator(customSeperator);
    }).toThrow(ERROR_MESSAGE.INVALID_SEPERATOR_LENGTH);
  });

  test('커스텀 구분자가 숫자라면 에러를 발생시킨다.', () => {
    const customSeperator = '6';

    expect(() => {
      validateCustomSeperator(customSeperator);
    }).toThrow(ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_NUMBER);
  });

  test('커스텀 구분자가 기본 구분자(,)와 같다면 에러를 발생시킨다.', () => {
    const customSeperator = ',';

    expect(() => {
      validateCustomSeperator(customSeperator);
    }).toThrow(ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_DEFAULT);
  });

  test('커스텀 구분자가 기본 구분자(:)와 같다면 에러를 발생시킨다.', () => {
    const customSeperator = ':';

    expect(() => {
      validateCustomSeperator(customSeperator);
    }).toThrow(ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_DEFAULT);
  });

  test('커스텀 구분자가 숫자 또는 기본 구분자가 아니라면 통과한다.', () => {
    const customSeperator = '.';

    expect(() => {
      validateCustomSeperator(customSeperator);
    }).not.toThrow();
  });
});

describe('validateParsedInput', () => {
  test('파싱된 문자열의 맨 앞 숫자가 아니라면 에러를 발생시킨다.', () => {
    const escapedSeperator = '=';
    const parsedInput = ':5,2';

    expect(() => {
      validateParsedInput(escapedSeperator, parsedInput);
    }).toThrow(ERROR_MESSAGE.INVALID_START_END_CHARACTER);
  });

  test('파싱된 문자열의 맨 뒤 숫자가 아니라면 에러를 발생시킨다.', () => {
    const escapedSeperator = '=';
    const parsedInput = '5,2=';

    expect(() => {
      validateParsedInput(escapedSeperator, parsedInput);
    }).toThrow(ERROR_MESSAGE.INVALID_START_END_CHARACTER);
  });

  test('커스텀 구분자를 포함한 구분자 및 숫자가 아닌 문자가 있다면 에러를 발생시킨다.', () => {
    const escapedSeperator = '=';
    const parsedInput = '5,2=6!3';

    expect(() => {
      validateParsedInput(escapedSeperator, parsedInput);
    }).toThrow(ERROR_MESSAGE.INVALID_CHARACTER);
  });

  test('구분자가 연속으로 오면 에러를 발생시킨다.', () => {
    const escapedSeperator = '=';
    const parsedInput = '5,2=,63';

    expect(() => {
      validateParsedInput(escapedSeperator, parsedInput);
    }).toThrow(ERROR_MESSAGE.MISSING_NUMBER_BETWEEN_SEPERATORS);
  });

  test('맨 앞과 뒤가 숫자이며 숫자와 구분자로만 구성되고 구분자가 연속으로 오지 않으면 통과한다.', () => {
    const escapedSeperator = '=';
    const parsedInput = '5,2=63:3';

    expect(() => {
      validateParsedInput(escapedSeperator, parsedInput);
    }).not.toThrow();
  });
});
