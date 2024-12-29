import { removeVowels } from "../Exercises/RemoveVowels";

test("It has to remove all vowels", () => {
  expect(
    removeVowels("Estoy en Dinamarca practicando algoritmos en un Hostel")
  ).toBe("sty n Dnmrc prctcnd lgrtms n n Hstl");
});
