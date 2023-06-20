import { tile } from './tile.js';
import type { Tile } from './types.js';

export function chooseOkey(tiles: Readonly<Tile[]>) {
  const allTiles = [...tiles];
  const indicatorTile = allTiles.pop();

  if (!indicatorTile) {
    throw Error('indicator tile not found');
  }
  const okeyTileNumber = indicatorTile.number === 13 ? 1 : indicatorTile.number + 1;
  const okeyTiles = allTiles.filter((tile) => tile.number === okeyTileNumber && tile.color === indicatorTile.color);

  if (okeyTiles.length !== 2) {
    throw Error('okey tile not found');
  }

  for (const okeyTile of okeyTiles) {
    okeyTile.type = 'Okey';
  }

  allTiles.push(tile(indicatorTile.color, okeyTileNumber, 'Fake'), tile(indicatorTile.color, okeyTileNumber, 'Fake'));

  return { allTiles, indicatorTile };
}
