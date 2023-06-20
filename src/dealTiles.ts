import type { Tile } from './types.js';

export function dealTiles(tiles: Readonly<Tile[]>, hasExtraTile: boolean) {
  const requiredTilesForHand = hasExtraTile ? 15 : 14;
  const allTiles = [...tiles];
  const playerHand: Tile[] = [];

  if (tiles.length < requiredTilesForHand) {
    throw Error('There is not enough tile in tiles');
  }

  for (let i = 0; i < requiredTilesForHand; i++) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    playerHand.push(allTiles.pop()!);
  }
  return { playerHand, remainingTiles: allTiles };
}
