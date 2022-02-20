import { minRemoveToMakeValid } from "./min-remove-to-valid.mjs";

describe("minRemoveToMakeValid", () => {
  it("should return the correct value", () => {
    const input = "lee(t(c)o)de)";
    const expected = "lee(t(c)o)de";

    expect(minRemoveToMakeValid(input)).toStrictEqual(expected);
  });

  it("should return the correct value", () => {
    const input = "a)b(c)d";
    const expected = "ab(c)d";

    expect(minRemoveToMakeValid(input)).toStrictEqual(expected);
  });

  it("should return the correct value", () => {
    const input = "))((";
    const expected = "";

    expect(minRemoveToMakeValid(input)).toStrictEqual(expected);
  });

  it("should return the correct value", () => {
    const input = "()))((()";
    const expected = "()()";

    expect(minRemoveToMakeValid(input)).toStrictEqual(expected);
  });
});
