import { ERROR_MESSAGE } from '../src/constants';
import { validateRawInput } from '../src/validator';

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
