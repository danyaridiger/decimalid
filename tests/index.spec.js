import decimalid from "../index";

describe("decimalid", () => {
  it("differs from previously generated identifies", () => {
    const id1 = decimalid();
    const id2 = decimalid();

    expect(id2).not.toEqual(id1);
  });

  it.concurrent.each([
    [decimalid(0), globalThis.INVALID_SIZE],
    [decimalid(21), globalThis.INVALID_SIZE],
    [decimalid(-2), globalThis.INVALID_SIZE],
    [decimalid(100), globalThis.INVALID_SIZE],
  ])("%#) doesn't generate identifier with invalid size", async (identifier, expected) => {
    expect(identifier).toEqual(expected);
  });

  it("always generates valid integer", () => {
    for (let i = 0; i < 100; i++) {
      const id = decimalid(3);
      const places = id / 100 % 10;

      expect(places).toBeGreaterThanOrEqual(1);
    }
  });
});