export type Color = 'Red' | 'Yellow' | 'Black' | 'Green';

export type Tile = {
  type: 'Regular' | 'Fake' | 'Okey';
  color: Color;
  number: number;
};
