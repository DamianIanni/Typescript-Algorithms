import { uniqueInOrder } from "../Exercises/UniqueInOrder";

test("UniqueInOrder", () => {
  expect(uniqueInOrder("AAAABBBCCDAABBB")).toStrictEqual([
    "A",
    "B",
    "C",
    "D",
    "A",
    "B",
  ]);
  expect(uniqueInOrder("ABBCcAD")).toStrictEqual([
    "A",
    "B",
    "C",
    "c",
    "A",
    "D",
  ]);
  expect(uniqueInOrder([1, 2, 2, 3, 3])).toStrictEqual([1, 2, 3]);
});
