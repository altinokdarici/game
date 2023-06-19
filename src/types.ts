export type Color = "Red" | "Yellow" | "Black" | "Green";

export type RegularTile = {
  type: "RegularTile";
  color: Color;
  number: number;
};

export type FakeOkeyTile = {
  type: "FakeOkeyTile";
};

export type Tile = RegularTile | FakeOkeyTile;
