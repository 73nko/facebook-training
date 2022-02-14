/**
 * @param {number} N
 * @param {string} C
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */

function hasScene(type1, type2, type3) {
  const scene = [type1, type2, type3].join("");
  return scene === "PAB" || scene === "BAP";
}

export function getArtisticPhotographCount(N, C, X, Y) {
  let photos = 0;
  for (let i = 0; i < N; i++) {
    for (let j = X; j <= Y; j++) {
      for (let k = X; k <= Y; k++) {
        if (i + j + k >= N) break;
        if (hasScene(C[i], C[i + j], C[i + j + k])) {
          photos++;
        }
      }
    }
  }

  return photos;
}
