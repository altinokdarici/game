import type { Color, FakeOkeyTile, RegularTile, Tile } from './types.js';

export type ColorInitials = {
  [K in Color]: K extends `${infer FirstLetter}${string}` ? FirstLetter : never;
}[Color];

const colorMap: Record<ColorInitials, Color> = {
  B: 'Black',
  Y: 'Yellow',
  R: 'Red',
  G: 'Green',
};

function isColorInitials(char: string): char is ColorInitials {
  return char in colorMap;
}

function getColor(char: string): Color {
  if (!isColorInitials(char)) {
    throw new Error('Invalid color');
  }
  return colorMap[char];
}

function createTile(color: Color, number: number): RegularTile {
  if (number > 13 || number < 1) {
    throw new Error('Invalid tile number');
  }

  return {
    type: 'RegularTile',
    color,
    number,
  };
}

function parseTile(input: string): RegularTile {
  const str = input.toUpperCase();
  if (str.length != 2 && str.length != 3) {
    throw new Error('Invalid tile');
  }

  return createTile(getColor(str[0]), parseInt(str.substring(1)));
}

export function isRegularTile(tile: Tile): tile is RegularTile {
  return tile.type === 'RegularTile';
}

export function fakeOkeyTile(): FakeOkeyTile {
  return {
    type: 'FakeOkeyTile',
  };
}

export type TileString = `${ColorInitials}${number}`;

export function tile(color: Color, number: number): RegularTile;
export function tile(str: TileString): RegularTile;
export function tile(strOrColor: TileString | Color, number?: number): RegularTile {
  if (number == undefined || number == null) {
    return parseTile(strOrColor as string);
  }

  return createTile(strOrColor as Color, number);
}
