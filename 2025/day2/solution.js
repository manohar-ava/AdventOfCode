import { testInput, data } from "./input.js";

const input = data;

export const day2 = async () => {
  const res = input.split(",").reduce(
    (a, v) => {
      const [first, second] = v.split("-");
      const res = check(first, second);
      const res2 = check2(first, second);
      res.forEach((r) => {
        a[0] += parseInt(r);
      });
      res2.forEach((r) => {
        a[1] += parseInt(r);
      });
      return a;
    },
    [0, 0],
  );

  console.log("solution 1 :", res[0]);
  console.log("solution 2 :", res[1]);
};

function check(left, right) {
  const res = new Set();
  let min = Number(left);
  const max = Number(right);

  while (min <= max) {
    const str = `${min}`;
    if (str.length % 2 === 0) {
      const halfPoint = str.length / 2;
      if (str.slice(0, halfPoint) === str.slice(halfPoint, str.length)) {
        res.add(min);
      }
    }
    min++;
  }
  return res;
}

function check2(left, right) {
  const res = new Set();
  let min = Number(left);
  const max = Number(right);

  while (min <= max) {
    const str = `${min}`;
    let l = 1;
    while (l <= str.length / 2) {
      const repeatVal = str.length / l;
      if (str.length % l === 0) {
        let temp = Array(repeatVal).fill(str.slice(0, l)).join("");
        if (Number(temp) <= max && Number(temp) >= min) {
          res.add(Number(temp));
        }
      }
      l++;
    }
    min++;
  }
  return res;
}
