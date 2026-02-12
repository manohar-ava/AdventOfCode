import { data, testData } from "./input.js";

const input = testData;

export const day6 = async () => {
  const temp = input.split("\n");
  const opsTemp = temp.pop();
  const ops = opsTemp.split(" ").filter((x) => x);
  const ops2 = opsTemp.split("");
  const values = temp.reduce((acc, val) => {
    acc.push(val.split(" ").filter((v) => v));
    return acc;
  }, []);

  const values2 = temp.reduce((acc, val) => {
    acc.push(val.split("").reduce((a, v) => [...a, ...v], []));
    return acc;
  }, []);
  const solution1 = sol1(ops, values);
  const solution2 = sol2(ops2, values2);
  console.log("solution 1 :", solution1);
  console.log("solution 2 :", solution2);
};

function sol2(ops, values) {
  console.log(ops, values);
  let numToMoveBack = 0;
  for (const idx in ops) {
    const curOp = ops[idx];
    if (curOp == " ") {
      numToMoveBack++;
      continue;
    } else {
      numToMoveBack--;
    }
  }
  return 0;
}

function sol1(ops, values) {
  const result = ops.reduce((acc, x, idx) => {
    let res = 0;
    if (x === "+") {
      res = values.reduce((a, v) => (a += parseInt(v[idx])), 0);
    } else {
      res = values.reduce((a, v) => (a *= parseInt(v[idx])), 1);
    }
    acc += res;
    return acc;
  }, 0);
  return result;
}
