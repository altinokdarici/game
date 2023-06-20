import type { Color, Tile, TileType } from './types.js';

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

function createTile(color: Color, number: number, type: TileType = 'Regular'): Tile {
  if (number > 13 || number < 1) {
    throw new Error('Invalid tile number');
  }

  return {
    type,
    color,
    number,
  };
}

function parseTile(input: TileString): Tile {
  const str = input.toUpperCase();
  if (str.length < 2 && str.length > 4) {
    throw new Error('Invalid tile');
  }

  let type: TileType = 'Regular';
  const possibleType = str[str.length - 1];
  if (possibleType === 'F' || possibleType === 'R' || possibleType === 'O') {
    type = possibleType === 'F' ? 'Fake' : possibleType === 'O' ? 'Okey' : 'Regular';
  }

  return createTile(getColor(str[0]), parseInt(str.substring(1)), type);
}

export type TileString = `${ColorInitials}${number}` | `${ColorInitials}${number}${'F' | 'O' | 'R'}`;

export function tile(color: Color, number: number, type?: TileType): Tile;
export function tile(str: TileString): Tile;
export function tile(strOrColor: TileString | Color, numberOrType?: number | TileType, type?: TileType): Tile {
  if (numberOrType == undefined) {
    return parseTile(strOrColor as TileString);
  }

  return createTile(strOrColor as Color, numberOrType as number, type);
}
