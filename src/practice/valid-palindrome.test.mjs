import { validPalindrome } from "./valid-palindrome.mjs";

describe("validPalindrome", () => {
  it("should return true for 'aba'", () => {
    expect(validPalindrome("aba")).toBe(true);
  });

  it("should return true for 'abca'", () => {
    expect(validPalindrome("abca")).toBe(true);
  });

  it("should return false for 'abc'", () => {
    expect(validPalindrome("abc")).toBe(false);
  });
});
