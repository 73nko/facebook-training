import { rotationalCipher } from "./rotational-cipher.mjs";

describe("rotationalCipher", () => {
  it("should return", () => {
    const input = "All-convoYs-9-be:Alert1.";
    const rotationFactor = 4;
    const expected = "Epp-gsrzsCw-3-fi:Epivx5.";
    const output = rotationalCipher(input, rotationFactor);
    expect(output).toEqual(expected);
  });

  it("should return", () => {
    const input = "abcdZXYzxy-999.@";
    const rotationFactor = 200;
    const expected = "stuvRPQrpq-999.@";
    const output = rotationalCipher(input, rotationFactor);
    expect(output).toEqual(expected);
  });

  it("should return", () => {
    const input = "Zebra-493?";
    const rotationFactor = 3;
    const expected = "Cheud-726?";
    const output = rotationalCipher(input, rotationFactor);
    expect(output).toEqual(expected);
  });
});
