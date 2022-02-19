/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
export function merge(intervals) {
  // sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  // loop through intervals
  for (const interval of intervals) {
    const lastMerged = merged[merged.length - 1];
    if (merged.length === 0 || lastMerged[1] < interval[0])
      merged.push(interval);
    else lastMerged[1] = Math.max(lastMerged[1], interval[1]);
  }

  return merged;
}
