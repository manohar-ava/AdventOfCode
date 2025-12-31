import { testInput, input as inputData } from "./input.js";
const input = inputData;
// l,lt,t,rt,r,rb,b,lb
const map = [
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
];

export const day4 = async () => {
  const data = input.split("\n");
  const list = data.map((x) => [...x]);
  const res = recForkliftPickUP(list, []);
  console.log("solution 1 :", res[0]);
  console.log(
    "solution 2 :",
    res.reduce((a, v) => a + v, 0),
  );
};

function recForkliftPickUP(list, results) {
  let maxRoll = 0;
  const rollsToRemove = [];
  list.forEach((v, m) => {
    v.forEach((x, n) => {
      if (x == "@") {
        const count = map.reduce((acc, val) => {
          const k = m + val[0];
          const l = n + val[1];
          if (list[k] && list[k][l] == "@") {
            acc++;
          }
          return acc;
        }, 0);
        if (count < 4) {
          rollsToRemove.push([m, n]);
          maxRoll++;
        }
      }
    });
  });
  rollsToRemove.forEach((idxs) => {
    list[idxs[0]][idxs[1]] = ".";
  });
  if (maxRoll <= 0) return results;
  return recForkliftPickUP(list, [...results, maxRoll]);
}
