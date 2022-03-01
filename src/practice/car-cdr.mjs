/*

cons(a, b) constructs a pair, and car(pair) and cdr(pair)
returns the first and last element of that pair.
For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

*/

export function cons(a, b) {
  function pair(f) {
    return f(a, b);
  }
  return pair;
}

export const car = (pair) => pair((a, b) => a);
export const cdr = (pair) => pair((a, b) => b);
