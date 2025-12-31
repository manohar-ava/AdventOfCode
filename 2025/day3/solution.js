import { testInput, data } from "./input.js";
const input = data;

export const day3 = async () => {
  const banks = input.split("\n");
  const res = banks.reduce(
    (a, v) => {
      a[0] += getPowerFromBank(v);
      a[1] += getPowerFromBank2(v);
      return a;
    },
    [0, 0],
  );

  console.log("solution 1 :", res[0]);
  console.log("solution 2 :", res[1]);
};

function getPowerFromBank(bank) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < bank.length; i++) {
    for (let j = i + 1; j < bank.length; j++) {
      const outer = bank[i];
      const inner = bank[j];
      const num = Number(`${outer}${inner}`);
      max = Math.max(max, num);
    }
  }
  return max;
}

function getPowerFromBank2(bank) {
  bank = bank.split("").map((a) => parseInt(a));
  let lenToRemove = bank.length - 12;
  const res = [];
  for (let i = 0; i < bank.length; i++) {
    const cur = bank[i];
    while (res.length > 0 && res[res.length - 1] < cur && lenToRemove > 0) {
      res.pop();
      lenToRemove--;
    }
    res.push(bank[i]);
  }
  while (res.length > 12) res.pop();
  return parseInt(res.join(""));
}
