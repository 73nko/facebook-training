const calculateLevenshteinDistance = (a, b) => {
  const aLimit = a.length + 1;
  const bLimit = b.length + 1;
  const distance = Array(aLimit);
  for (let i = 0; i < aLimit; ++i) {
    distance[i] = Array(bLimit);
  }
  for (let i = 0; i < aLimit; ++i) {
    distance[i][0] = i;
  }
  for (let j = 0; j < bLimit; ++j) {
    distance[0][j] = j;
  }
  for (let i = 1; i < aLimit; ++i) {
    for (let j = 1; j < bLimit; ++j) {
      const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1;
      distance[i][j] = Math.min(
        distance[i - 1][j] + 1,
        distance[i][j - 1] + 1,
        distance[i - 1][j - 1] + substitutionCost
      );
    }
  }
  return distance[a.length][b.length];
};

console.log(calculateLevenshteinDistance("kitten", "sitting")); // 3
