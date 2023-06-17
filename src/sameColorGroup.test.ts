import { describe, it, expect } from "@jest/globals";
import { sameColorGroup, sameNumberGroup } from "./sameColorGroup";
import { tile } from "./tile";

describe("sameColorGroup", () => {
  it("sameColorGroup should work", () => {
    const result = sameColorGroup([tile("green", 12), tile("green", 11)]);
    expect(result).toEqual(true);
  });
  it("sameColorGroup should not work", () => {
    const result = sameColorGroup([
      tile("green", 12),
      tile("green", 11),
      tile("red", 10),
    ]);
    expect(result).toEqual(false);
  });

  it("sameNumberGroup should work", () => {
    const result = sameNumberGroup([tile("red", 11), tile("green", 11)]);
    expect(result).toEqual(true);
  });
  it("sameNumberGroup should not work", () => {
    const result = sameNumberGroup([tile("red", 12), tile("green", 11)]);
    expect(result).toEqual(false);
  });
});
