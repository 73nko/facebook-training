export function areTheyEqual(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  const sortedA = arrayA.sort((a, b) => a - b);
  const sortedB = arrayB.sort((a, b) => a - b);
  return sortedA.toString() === sortedB.toString();
}
