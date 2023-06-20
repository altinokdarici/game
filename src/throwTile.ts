import type { Tile } from './types.js';

/**
 * Throw a tile from the player tiles.
 * @param playerTiles - The player tiles.
 * @param tileToThrow - The tile to throw.
 * @param thrownTiles - The thrown tiles.
 * @returns The new player tiles and thrown tiles.
 */
export function throwTile(playerTiles: Readonly<Tile[]>, tileToThrow: Tile, thrownTiles: Readonly<Tile[]>) {
  const tileIndex = playerTiles.indexOf(tileToThrow);
  if (tileIndex === -1) {
    throw new Error('The tile to throw is not in the player tiles.');
  }

  const newPlayerTiles = [...playerTiles];
  newPlayerTiles.splice(tileIndex, 1); // Remove the tile to throw from the player tiles.

  const newThrownTiles = [...thrownTiles, tileToThrow];

  return {
    playerTiles: newPlayerTiles,
    thrownTiles: newThrownTiles,
  };
}
