/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
export function exclusiveTime(n, logs) {
  const sums = new Array(n).fill(0);
  const stack = [];
  let prevTime;
  logs.forEach((log) => {
    const details = log.split(":");
    const id = parseInt(details[0]);
    const point = details[1];
    const time = parseInt(details[2]);
    if (point === "start") {
      // If the stack is not empty, we need to increment the sum
      // of the previous function from previous start time to now
      if (stack.length > 0) {
        const prevFn = stack[stack.length - 1];
        sums[prevFn] += time - prevTime;
      }
      stack.push(id); // Push this function onto the stack
      prevTime = time; // Set the previous start time to the time now
    } else {
      const last = stack.pop(); // Get the last function to start from the top of the stack
      sums[last] += time - prevTime + 1; // Increment the sum from start to end, inclusive
      prevTime = time + 1; // Set the previous start time to be one after this function ended
    }
  });
  return sums;
}

const n = 2;
const logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"];

console.log(exclusiveTime(n, logs));
