import type { Tile } from '../types.js';

export interface Player {
  tiles: Tile[];
  thrownTiles: Tile[];
}

export interface Game {
  players: Player[];
  tiles: Tile[];
  indicator: Tile;
}

export type Games = Record<string, Game>;
