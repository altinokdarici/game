export type Color = 'Red' | 'Yellow' | 'Black' | 'Green';

export type TileType = 'Regular' | 'Fake' | 'Okey';

export type Tile = {
  type: TileType;
  color: Color;
  number: number;
};
