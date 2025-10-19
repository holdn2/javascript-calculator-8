import calculator from '../src/calculator.js';

describe('calculator', () => {
  test('기본 구분자(콤마, 콜론)로 구분된 숫자를 모두 합산한다', () => {
    const input = '1,21:3';
    const result = calculator(input);
    expect(result).toBe(25);
  });

  test('커스텀 구분자를 사용한 숫자를 모두 합산한다', () => {
    const input = '//;\n1;2;35';
    const result = calculator(input);
    expect(result).toBe(38);
  });

  test('빈 문자열을 입력하면 0을 반환한다', () => {
    const input = '';
    const result = calculator(input);
    expect(result).toBe(0);
  });
});
