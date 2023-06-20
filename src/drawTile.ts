import type { Tile } from './types.js';

export function drawTile(tiles: Readonly<Tile[]>, playerTiles: Readonly<Tile[]>) {
  const playerHand: Tile[] = [...playerTiles];
  const otherTiles: Tile[] = [...tiles];

  const newTile = otherTiles.pop();

  if (!newTile) {
    throw Error('There is not enough tile in tiles');
  }

  playerHand.push(newTile);

  return { playerTiles: playerHand, tiles: otherTiles };
}
