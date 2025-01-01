export const uniqueInOrder = (
  ele: string | (string | number)[]
): (string | number)[] => {
  let res: (string | number)[] = [];

  if (typeof ele === "string") {
    ele = ele.split("");
  }
  for (let i: number = 0; i < ele.length; i++) {
    ele[i] !== ele[i + 1] && res.push(ele[i]);
  }
  return res;
};
