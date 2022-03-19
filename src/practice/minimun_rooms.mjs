/*

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping),
find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

*/

const minMeetingRooms = function (intervals) {
  const startTimes = [];
  const endTimes = [];

  for (const i of intervals) {
    startTimes.push(i[0]);
    endTimes.push(i[1]);
  }

  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);

  let ep = 0;
  let rooms = 0;

  for (let sp = 0; sp < intervals.length; sp++) {
    if (startTimes[sp] >= endTimes[ep]) {
      ep++;
    } else {
      rooms++;
    }
  }

  return rooms;
};

const intervals = [
  [30, 75],
  [0, 50],
  [60, 150],
];

console.log(minMeetingRooms(intervals));
