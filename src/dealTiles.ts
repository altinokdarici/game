import { Tile } from './types';

export function dealTiles(tiles: Tile[], hasExtraTile: boolean) {
  const requiredTilesForHand = hasExtraTile ? 15 : 14;
  const playerHand: Tile[] = [];

  if (tiles.length < requiredTilesForHand) {
    throw Error('There is not enough tile in tiles');
  }

  for (let i = 0; i < requiredTilesForHand; i++) {
    playerHand.push(tiles.pop()!);
  }
  return [playerHand, tiles];
}
