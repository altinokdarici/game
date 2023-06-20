import { tile } from './tile.js';
import type { Tile } from './types.js';

export function chooseOkey(tiles: Readonly<Tile[]>) {
  const allTiles = [...tiles];
  const indicator = allTiles.pop();

  if (!indicator) {
    throw Error('indicator tile not found');
  }
  const okeyTileNumber = indicator.number === 13 ? 1 : indicator.number + 1;
  const okeyTiles = allTiles.filter((tile) => tile.number === okeyTileNumber && tile.color === indicator.color);

  if (okeyTiles.length !== 2) {
    throw Error('okey tile not found');
  }

  for (const okeyTile of okeyTiles) {
    okeyTile.type = 'Okey';
  }

  allTiles.push(tile(indicator.color, okeyTileNumber, 'Fake'), tile(indicator.color, okeyTileNumber, 'Fake'));

  return { tiles: allTiles, indicator };
}
