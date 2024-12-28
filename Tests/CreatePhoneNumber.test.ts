import { createPhoneNumber } from "../Exercises/CreatePhoneNumber";

test("CreatePhoneNumber should return a string of those numbers in the form of a phone number", () => {
  expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(
    "(123) 456-7890"
  );
  expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(
    "(111) 111-1111"
  );
  expect(createPhoneNumber([1, 1, 3, 1, 9, 6, 1, 1, 1, 1])).toBe(
    "(113) 196-1111"
  );
});
