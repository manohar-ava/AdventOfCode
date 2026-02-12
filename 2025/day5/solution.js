import { testInput, data } from "./input.js";

const input = data;

export const day5 = async () => {
  const [r, v] = input.split("\n\n");
  const ranges = r.split("\n");
  const values = v.split("\n");
  const res = values.reduce((acc, val) => {
    const shouldAdd = ranges.some((range) => {
      const [min, max] = range.split("-");
      if (parseInt(val) >= parseInt(min) && parseInt(val) <= parseInt(max)) {
        return true;
      }
      return false;
    });
    if (shouldAdd) acc++;
    return acc;
  }, 0);

  const sortedRanges = ranges
    .map((x) => {
      return x.split("-").map((x) => parseInt(x));
    })
    .sort((a, b) => a[0] - b[0]);

  const results = [sortedRanges[0]];
  for (let i = 1; i < sortedRanges.length; i++) {
    const currRange = sortedRanges[i];
    const [cmin, cmax] = currRange;
    const resultLastEle = results[results.length - 1];
    const [rmin, rmax] = resultLastEle;
    if (cmin >= rmin && cmin <= rmax) {
      const tempRange = [rmin, Math.max(cmax, rmax)];
      results.pop();
      results.push(tempRange);
    } else {
      results.push(currRange);
    }
  }
  console.log(results);
  const temp = results.reduce((acc, v) => {
    acc += v[1] - v[0];
    acc++;
    return acc;
  }, 0);
  // console.log(ranges, values, res);
  console.log("solution 1 :", res);
  console.log("solution 2 :", temp);
};
