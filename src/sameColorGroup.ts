import { RegularTile } from './types';

/**
 * All numbers are consecutive and the same color
 */
export function sameColorGroup(group: RegularTile[]) {
  let color = group[0].color;
  for (const tile of group) {
    if (tile.color !== color) {
      return false;
    }
  }

  return true;
}

/**
 * All numbers are the same and different colors
 */
export function sameNumberGroup(group: RegularTile[]) {
  let number = group[0].number;
  for (const tile of group) {
    if (tile.number !== number) {
      return false;
    }
  }

  return true;
}
