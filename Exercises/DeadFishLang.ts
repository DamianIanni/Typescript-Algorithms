/*
Create a parser to interpret and execute the Deadfish language.

Deadfish operates on a single value in memory, which is initially set to 0.

It uses four single-character commands:

i: Increment the value
d: Decrement the value
s: Square the value
o: Output the value to a result array
All other instructions are no-ops and have no effect.

Examples
Program "iiisdoso" should return numbers [8, 64].
Program "iiisdosodddddiso" should return numbers [8, 64, 3600].
*/

export const deadFish = (command: string): number[] => {
  let result: number[] = [];
  let num: number = 0;
  for (let i: number = 0; i < command.length; i++) {
    switch (command[i]) {
      case "i":
        num++;
        break;
      case "d":
        num--;
        break;
      case "s":
        num = num * num;
        break;
      default:
        result.push(num);
        break;
    }
  }
  return result;
};
