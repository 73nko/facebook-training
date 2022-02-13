/**
 * @param {number} N
 * @param {string} C
 * @return {string}
 */
export function getMaxAdditionalDinersCount(N, K, M, S) {
  let seat = 1;
  let availableSeats = 0;
  let socialDistance = 0;

  S.sort((a, b) => a - b);
  // This trick is to count the available seats at the end if they exist
  S.push(N + K + 1);

  S.forEach((diner) => {
    socialDistance = diner - K - seat;
    availableSeats +=
      socialDistance > 0 ? Math.ceil(socialDistance / (K + 1)) : 0;
    seat = diner + K + 1;
  });

  return availableSeats;
}
