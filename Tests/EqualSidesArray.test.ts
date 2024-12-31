import { findeEvenIndex } from "../Exercises/EqualSidesArray";

test("Find the even index for the sum, if multiples, then the minor one", () => {
  expect(findeEvenIndex([1, 2, 3, 4, 3, 2, 1])).toBe(3);
  expect(findeEvenIndex([20, 10, -80, 10, 10, 15, 35])).toBe(0);
  expect(findeEvenIndex([1, 2, 3, 4, 6, 4, 3, 2, 1])).toBe(4);
});
