import { extractCustomSeperator, extractNumArr } from '../src/utils';

describe('extractCustomSeperator', () => {
  test('빈 문자열이 들어온다면 그대로 반환한다.', () => {
    const customIndicator = '';
    expect(extractCustomSeperator(customIndicator)).toBe('');
  });

  test('커스텀 구분자 지시자와 함께 들어온다면 커스텀 구분자를 추출하여 반환한다.', () => {
    const customIndicator = '//.\n';
    expect(extractCustomSeperator(customIndicator)).toBe('.');
  });
});

describe('extractNumArr', () => {
  test('커스텀 구분자가 없다면 기본 구분자를 기준으로 나누어 숫자로 이루어진 배열을 반환한다.', () => {
    const customSeperator = '';
    const parsedInput = '6,3:5';

    expect(extractNumArr(customSeperator, parsedInput)).toEqual([
      '6',
      '3',
      '5',
    ]);
  });

  test('커스텀 구분자를 포함한 구분자를 기준으로 나누어 숫자로 이루어진 배열을 반환한다.', () => {
    const customSeperator = '.';
    const parsedInput = '6,3.5:4';

    expect(extractNumArr(customSeperator, parsedInput)).toEqual([
      '6',
      '3',
      '5',
      '4',
    ]);
  });
});
