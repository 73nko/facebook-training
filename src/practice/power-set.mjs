const powerSet = (arr = []) => {
  const res = [];
  const { length } = arr;
  const numberOfCombinations = 2 ** length;
  for (let i = 0; i < numberOfCombinations; i++) {
    const subSet = [];

    for (let j = 0; j < arr.length; j++) {
      if (i & (1 << j)) {
        subSet.push(arr[j]);
      }
    }
    res.push(subSet);
  }

  return res;
};

console.log(powerSet([1, 2, 3]));
