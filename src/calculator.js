// 숫자로 이루어진 문자 배열을 인수로 받아서 총합을 return 하는 함수
export default function calculator(stringNumberArray) {
  let sum = 0;
  stringNumberArray.map((number) => {
    sum += Number(number);
  });

  return sum;
}
