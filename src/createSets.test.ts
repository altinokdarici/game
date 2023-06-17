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

    const expected = {
      ungroupedTiles: [{ color: "Green", number: 13 }],
      validGroups: [
        [
          { color: "Black", number: 13 },
          { color: "Black", number: 12 },
          { color: "Black", number: 11 },
        ],
        [
          { color: "Black", number: 4 },
          { color: "Black", number: 3 },
          { color: "Black", number: 2 },
          { color: "Black", number: 1 },
        ],
        [
          { color: "Green", number: 13 },
          { color: "Red", number: 13 },
          { color: "Yellow", number: 13 },
          { color: "Black", number: 13 },
        ],
        [
          { color: "Red", number: 6 },
          { color: "Red", number: 5 },
          { color: "Red", number: 4 },
        ],
      ],
    };

    expect(sets).toEqual(expected);
  });
});
