import { ERROR_MESSAGE } from '../src/constants';
import parseInput, { getCustomSeperator } from '../src/parseInput';

describe('getCustomSeperator', () => {
  test('커스텀 구분자가 한 글자일 때 정상적으로 반환한다', () => {
    const customIndicator = '//;\n';
    const result = getCustomSeperator(customIndicator);
    expect(result).toBe(';');
  });

  test('커스텀 구분자가 두 글자 이상이면 에러를 발생시킨다.', () => {
    const customIndicator = '//;;\n';
    expect(() => getCustomSeperator(customIndicator)).toThrow(
      ERROR_MESSAGE.INVALID_SEPERATOR_LENGTH,
    );
  });

  test('커스텀 구분자가 숫자이면 에러를 발생시킨다.', () => {
    const customIndicator = '//1\n';
    expect(() => getCustomSeperator(customIndicator)).toThrow(
      ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_NUMBER,
    );
  });

  test('커스텀 구분자가 기본 구분자(,) 이면 에러를 발생시킨다.', () => {
    const customIndicator = '//,\n';
    expect(() => getCustomSeperator(customIndicator)).toThrow(
      ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_DEFAULT,
    );
  });

  test('커스텀 구분자가 기본 구분자(:) 이면 에러를 발생시킨다.', () => {
    const customIndicator = '//:\n';
    expect(() => getCustomSeperator(customIndicator)).toThrow(
      ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_DEFAULT,
    );
  });

  test('커스텀 구분자 형식이 올바르지 않으면 에러를 발생시킨다.', () => {
    const customIndicator = '//;1;2;3';
    expect(() => getCustomSeperator(customIndicator)).toThrow(
      ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_INDICATOR,
    );
  });
});

describe('parseInput', () => {
  test('커스텀 구분자가 없으면 customSeperator는 빈 문자열과 input 그대로를 반환한다.', () => {
    const input = '1,2:3';
    const { customSeperator, parsedInput } = parseInput(input);

    expect(customSeperator).toBe('');
    expect(parsedInput).toBe(input);
  });

  test('커스텀 구분자 //와 \n 둘 중 하나라도 없다면 빈 문자열과 input 그대로를 반환한다..', () => {
    const input = '//1,2,3';
    const { customSeperator, parsedInput } = parseInput(input);

    expect(customSeperator).toBe('');
    expect(parsedInput).toBe(input);
  });

  test('커스텀 구분자가 정상적으로 파싱된다', () => {
    const input = '//;\n1;2;3';
    const { customSeperator, parsedInput } = parseInput(input);

    expect(customSeperator).toBe(';');
    expect(parsedInput).toBe('1;2;3');
  });

  test('//로 시작하지 않으면 에러를 던진다', () => {
    const input = '  //;\n1;2;3';
    expect(() => parseInput(input)).toThrow(
      ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_START,
    );
  });

  test('커스텀 구분자가 숫자이면 에러를 던진다', () => {
    const input = '//1\n1,2,3';
    expect(() => parseInput(input)).toThrow(
      ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_NUMBER,
    );
  });

  test('커스텀 구분자가 기본 구분자(,)이면 에러를 던진다', () => {
    const input = '//,\n1,2,3';
    expect(() => parseInput(input)).toThrow(
      ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_DEFAULT,
    );
  });

  test('커스텀 구분자가 기본 구분자(:)이면 에러를 던진다', () => {
    const input = '//:\n1:2:3';
    expect(() => parseInput(input)).toThrow(
      ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR_DEFAULT,
    );
  });
});
