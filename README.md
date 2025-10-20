# javascript-calculator-precourse

## ❓ 기능 요구 사항

- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
  - 예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  - 예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 ERROR를 발생시킨 후 애플리케이션은 종료되어야 한다.

## ❓ 입출력 요구 사항

- 입력 : 구분자와 양수로 구성된 문자열
- 출력 : 덧셈 결과
- 예시

```
덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6
```

## 👉 프로그램 흐름

1. **콘솔 입력**
   - `Console.readLineAsync()`로 문자열 입력을 받는다.

2. **입력 정규화**
   - 입력값에 포함된 `\\n` 문자열을 실제 개행문자(`\n`)로 변환한다.
   - 콘솔에서는 `\n` 입력이 `\\n` 문자열로 인식되기 때문.
   - 예: `"//;\\n1;2"` -> `"//;\n1;2"`

3. **입력 파싱 (`parseInput`)**
   - 입력 문자열을 커스텀 구분자 지시자 영역(`//...\n`)과 실제 계산 영역으로 분리한다.
   - 예: `"//;\n1;2;3"` -> `{ customIndicator: "//;\n", parsedInput: "1;2;3" }`

4. **커스텀 구분자 추출 (`extractCustomSeparator`)**
   - 커스텀 구분자 지시자 영역에서 커스텀 구분자를 추출한다.
   - 예 : `//;\n` -> `;`
   - 다음 조건을 만족하지 않으면 에러가 발생한다. (커스텀 구분자 검증)
     - 커스텀 구분자는 1글자여야 한다.
     - 숫자로 지정할 수 없다.
     - 기본 구분자(`,`, `:`)로 지정할 수 없다.

5. **파싱된 문자열 검증 (`validateParsedInput`)**
   - 문자열의 시작과 끝이 숫자여야 한다.
   - 문자열 내 문자는 숫자, 기본 구분자(`,`, `:`), 커스텀 구분자만 허용된다.
   - 구분자가 연속으로 두 번 이상 등장할 수 없다. (예: `1,,2`, `1::3` -> 에러 발생)

6. **숫자 배열 생성 (`extractNumArr`)**
   - 구분자를 기준으로 분리하여 숫자 문자열 배열로 변환한다.
   - 예 : `"1,2:3"` -> `["1", "2", "3"]` / `"//;\n1;2;3"` -> `["1", "2", "3"]`

7. **총합 계산 (`calculator`)**
   - `reduce()`를 사용해 숫자 배열을 합산한다.
   - 예: `["1", "2", "3"]` → `6`

8. **결과 출력**
   - `Console.print()`로 결과를 출력한다.

## 📍 함수

- **`parseInput(input)`** : 문자열을 커스텀 구분자 영역과 계산 영역으로 분리
- **`extractCustomSeparator(customIndicator)`** : 커스텀 구분자를 추출 및 검증
- **`extractNumArr(customSeparator, parsedInput)`** : 구분자를 기준으로 숫자 문자열 배열 생성
- **`validateRawInput(input)`** : 문자열 구조(커스텀 지시자 포함 여부, 시작 문자 등) 검증
- **`validateCustomSeparator(separator)`** : 커스텀 구분자 유효성 검증 (길이, 문자 종류 등)
- **`validateParsedInput(separator, parsedInput)`** : 파싱된 숫자 영역의 구성 유효성 검증
- **`formatEscapedSeparator(separator)`** : 정규식에서 안전하게 사용하도록 특수문자 이스케이프 처리
- **`calculator(input)`** : 입력 문자열을 정규화 -> 파싱 -> 검증 -> 합산 후 결과 반환

## 🔥 예외 처리

- [ERROR] 숫자와 구분자 이외의 다른 문자를 입력할 수 없습니다. (공백과 `.`도 일반 문자로 포함)
- [ERROR] 커스텀 구분자 지시자인 // 는 문자열 맨 앞에 위치해야 합니다.
- [ERROR] 커스텀 구분자는 한 글자여야 합니다.
- [ERROR] 커스텀 구분자로 숫자를 지정할 수 없습니다.
- [ERROR] ,과 :은 기본 구분자이므로 커스텀 구분자로 지정할 수 없습니다.
- [ERROR] 문자열의 맨 앞과 맨 뒤는 숫자여야 합니다. (커스텀 구분자를 지정하기 위한 문자열 제외)
- [ERROR] 구분자가 연속으로 올 수 없습니다.

## 📁 디렉토리 구조

```bash
src/
 ├─ 📄 App.js               # 프로그램 실행 흐름 (입출력)
 ├─ 📄 calculator.js        # 전체 계산 로직 제어
 ├─ 📄 constants.js         # 상수, 정규식, 에러 메시지 정의
 ├─ 📄 index.js             # 진입점
 ├─ 📄 parseInput.js        # 입력값 파싱 및 커스텀 지시자 분리
 ├─ 📄 utils.js             # 커스텀 구분자 추출, 숫자 배열 생성
 ├─ 📄 validator.js         # 입력값 유효성 검증
```

## 💻 참고자료

- [JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript?tab=readme-ov-file#table-of-contents)
- [Airbnb JavaScript Style Guide(번역)](https://github.com/ParkSB/javascript-style-guide)
- [우테코 mission-utils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils?tab=readme-ov-file)
