import type { Tile } from './types.js';

/**
 * Generates a random set of tiles for the game. (Excluding the fake tiles, and okey).
 * 104 tiles in total.
 */
export type generateRandomTiles = () => Tile[];

/**
 * Randomly determines the okey tile from the given tiles.
 * It will keep the okey tile in the tiles. (Do not remove it)
 */
export type determineOkey = (tiles: Readonly<Tile[]>) => Tile;

/**
 * Deal tiles to a player.
 * @param tiles - The tiles to deal from.
 * @param hasExtra - Whether the player has an extra tile.
 * @returns The tiles that are dealt to the player, and the rest of the tiles.
 */
export type dealTiles = (tiles: Readonly<Tile[]>, hasExtra: boolean) => { playerTile: Tile[]; restTiles: Tile[] };

/**
 * Draws a tile from the given tiles. It will pop from the stack of tiles. (The last tile)
 * @param tiles - The tiles to draw from.
 * @returns The tile that is drawn, and the rest of the tiles.
 */
export type drawTile = (tiles: Readonly<Tile[]>) => { tile: Tile; restTiles: Tile[] };

/**
 * Throws a tile to the given tiles. It will push to the stack of tiles.
 * @param tiles - The tiles to throw to.
 * @param tile - The tile to throw.
 */
export type throwTile = (tiles: Readonly<Tile[]>, tile: Tile) => Tile[];
