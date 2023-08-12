import { Stat } from "../types";

export function findMaxValue(stats: Stat[]) {
  let array: number[] = [];

  stats.forEach((stat) => {
    array.push(stat.base_stat);
  });
  return Math.max(...array);
}
