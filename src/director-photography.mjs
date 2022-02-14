/**
 * @param {number} N
 * @param {string} C
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
export function getArtisticPhotographCount(N, C, X, Y) {
  let photos = 0;
  for (let i = 0; i < N; i++) {
    for (let j = X; j <= Y; j++) {
      for (let k = X; k <= Y; k++) {
        if (i + j + k >= N) continue;
        if (hasScene(C[i], C[i + j], C[i + j + k])) photos++;
      }
    }
  }

  return photos;
}

function hasScene(i, j, k) {
  const scene = [i, j, k].join("");
  return scene === "PAB" || scene === "BAP";
}
