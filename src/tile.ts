import { Color, Tile } from "./types";

export type ColorInitials = {
  [K in Color]: K extends `${infer FirstLetter}${infer Rest}`
    ? FirstLetter
    : never;
}[Color];

const colorMap: Record<ColorInitials, Color> = {
  B: "Black",
  Y: "Yellow",
  R: "Red",
  G: "Green",
};

function isColorInitials(char: string): char is ColorInitials {
  return char in colorMap;
}

function getColor(char: string): Color {
  if (!isColorInitials(char)) {
    throw new Error("Invalid color");
  }
  return colorMap[char];
}

function createTile(color: Color, number: number): Tile {
  if (number > 13 || number < 1) {
    throw new Error("Invalid tile number");
  }

  return {
    color,
    number,
  };
}

function parseTile(input: string): Tile {
  const str = (input as string).toLowerCase();
  if (str.length != 2 && str.length != 3) {
    throw new Error("Invalid tile");
  }

  return createTile(getColor(str[0]), parseInt(str.substring(1)));
}

export type TileString = `${ColorInitials}${number}`;

export function tile(color: Color, number: number): Tile;
export function tile(str: TileString): Tile;
export function tile(strOrColor: TileString | Color, number?: number): Tile {
  if (number == undefined || number == null) {
    return parseTile(strOrColor as string);
  }

  return createTile(strOrColor as Color, number);
}
