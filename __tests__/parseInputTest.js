import { EMPTY_STRING } from '../src/constants';
import parseInput from '../src/parseInput';

describe('parseInput', () => {
  test('입력값이 //로 시작하지 않는다면 customSeperator는 빈 스트링, parsedInput은 input 그대로 출력한다.', () => {
    const input = '5,1:5';
    const result = parseInput(input);

    expect(result).toEqual({
      customIndicator: EMPTY_STRING,
      parsedInput: input,
    });
  });

  test('커스텀 구분자 지시자가 있다면 파싱하여 각각 출력한다.', () => {
    const input = '//.\n5,1';
    const result = parseInput(input);

    expect(result).toEqual({
      customIndicator: '//.\n',
      parsedInput: '5,1',
    });
  });
});
