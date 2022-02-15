/**
 * @param {number} N
 * @param {number[]} D
 * @param {number} K
 * @return {number}
 */
export function getMaximumEatenDishCount(N, D, K) {
  let response = 0;
  const dishesCount = new Set();
  const eatenArr = [];
  let pointer = 0;
  for (let i = 0; i < N; i++) {
    const dish = D[i];
    if (!dishesCount.has(dish)) {
      response++;
      dishesCount.add(dish);
      eatenArr.push(dish);
      if (dishesCount.size > K) {
        dishesCount.delete(eatenArr[pointer]);
        pointer++;
      }
    }
  }

  return response;
}
