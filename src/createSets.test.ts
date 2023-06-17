import { describe, it, expect } from "@jest/globals";
import { createSets } from "./createSets";
import { parseTiles } from "./tiles";

describe("createSets", () => {
  it("should work", () => {
    const tiles = parseTiles(
      "G13",
      "B12",
      "B13",
      "R13",
      "Y13",
      "R6",
      "B1",
      "G13",
      "B13",
      "B3",
      "B4",
      "B11",
      "B2",
      "R4",
      "R5"
    );

    const sets = createSets(tiles);

    expect(sets).toEqual(true);
  });
});
