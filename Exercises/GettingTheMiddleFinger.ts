/*
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.

"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/

export const gettingTheMiddleFinger = (st: string): string => {
  const even: boolean = st.length % 2 === 0;
  const n: number = Math.floor(st.length / 2);
  let midChar: string = "";

  if (st.length === 1 || st.length === 2) return st;

  even ? (midChar = st.slice(n - 1, n + 1)) : (midChar = st.slice(n, n + 1));

  return midChar;
};
