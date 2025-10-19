import { Console } from '@woowacourse/mission-utils';
import { INFORM_MESSAGE } from './constants.js';
import calculator from './calculator.js';

class App {
  async run() {
    const input = await Console.readLineAsync(INFORM_MESSAGE.INPUT);

    const result = calculator(input);

    Console.print(INFORM_MESSAGE.RESULT + result);
  }
}

export default App;
