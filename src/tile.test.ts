import { describe, it, expect } from "@jest/globals";
import { ColorInitials, TileString, tile } from "./tile";
import { Tile } from "./types";

describe("tile", () => {
  it("should return a tile with one letter one number", () => {
    const input = tile("B1");
    const expected: Tile = {
      color: "Black",
      number: 1,
    };
    expect(input).toStrictEqual(expected);
  });

  it("should return a tile with one letter two numbers", () => {
    const input = tile("B12");
    const expected: Tile = {
      color: "Black",
      number: 12,
    };
    expect(input).toStrictEqual(expected);
  });

  it("should throw an error with one letter two numbers that are greater than excepted", () => {
    expect(() => tile("B14")).toThrowError();
  });

  it("should throw an error with unknown letter", () => {
    expect(() => tile("K13" as TileString)).toThrowError();
  });
});
