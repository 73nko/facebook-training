import { cons, car, cdr } from "./car-cdr.mjs";

describe("Implement Car and cdr", () => {
  it("should return the first element of a pair", () => {
    expect(car(cons(1, 2))).toBe(1);
  });

  it("should return the second element of a pair", () => {
    expect(cdr(cons(1, 2))).toBe(2);
  });

  it("should return the first element of a pair", () => {
    const pair = cons(1, 4);
    expect(car(pair)).toBe(1);

    expect(cdr(pair)).toBe(4);
  });
});
