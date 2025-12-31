import { input1, testInput } from "./input.js";

const input = input1;

export const day1 = async () => {
  let dailPos = 50;
  const res = input.split("\n").reduce(
    (a, v) => {
      const [tempDailPos, tempZeroCount] = rotateDail(v, dailPos);

      dailPos = tempDailPos;

      if (tempDailPos == 0) {
        a[0]++;
      }
      a[1] += tempZeroCount;
      return a;
    },
    [0, 0],
  );
  console.log("solution 1 :", res[0]);
  console.log("solution 2 :", res[1]);
};

function rotateDail(input, dailPos) {
  let zeroCount = 0;
  const direction = input.charAt(0);
  let dailNumber = parseInt(input.slice(1));
  let number = dailNumber;
  while (number > 0) {
    if (dailPos === 0) {
      zeroCount++;
    }
    if (direction === "L") {
      if (dailPos === 0) {
        dailPos = 99;
      } else {
        dailPos--;
      }
    } else {
      if (dailPos === 99) {
        dailPos = 0;
      } else {
        dailPos++;
      }
    }
    number--;
  }
  return [dailPos, zeroCount];
}
