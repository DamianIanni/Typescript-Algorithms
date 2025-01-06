import { deadFish } from "../Exercises/DeadFishLang";

test("DeadFishLanguage", () => {
  expect(deadFish("iiisdoso")).toStrictEqual([8, 64]);
  expect(deadFish("iiisdosodddddiso")).toStrictEqual([8, 64, 3600]);
});
