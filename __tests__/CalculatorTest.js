import calculator from '../src/calculator.js';

describe('calculator', () => {
  test('문자 배열의 숫자를 모두 합산한다', () => {
    const result = calculator(['1', '2', '3']);
    expect(result).toBe(6);
  });

  test('빈 배열을 입력하면 0을 반환한다', () => {
    const result = calculator([]);
    expect(result).toBe(0);
  });
});
