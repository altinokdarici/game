import { sameColorGroup, sameNumberGroup } from './sameColorGroup.js';
import type { Tile } from './types.js';
import { orderBy } from 'lodash';

function canAddToSameColorGroup(group: Tile[], tile: Tile) {
  const sameColor = tile.color === group[0].color;
  const lastItemInGroup = group[group.length - 1];
  const canNumberSatisfy =
    tile.number === lastItemInGroup.number - 1 ||
    (tile.number === 1 && lastItemInGroup.number === 13) ||
    tile.number === group[0].number + 1;

  return sameColor && canNumberSatisfy;
}

function canAddToSameNumberGroup(group: Tile[], tile: Tile) {
  const isSameNumber = group[0].number === tile.number;
  const notHaveColor = !group.some((t) => t.color === tile.color);
  return isSameNumber && notHaveColor;
}

function canAddToGroup(group: Tile[], tile: Tile) {
  return (
    (sameColorGroup(group) && canAddToSameColorGroup(group, tile)) ||
    (sameNumberGroup(group) && canAddToSameNumberGroup(group, tile))
  );
}

function isValidSet(group: Tile[]) {
  return group.length >= 3;
}

export function createSets(tiles: Tile[], validGroups: Tile[][] = []) {
  const sortedTiles = orderBy(tiles, ['color', 'number'], ['asc', 'desc']);
  const existingGroupLength = validGroups.length;
  const groups = [...validGroups];

  validGroups.splice(0, validGroups.length);

  for (const tile of sortedTiles) {
    let foundGroup = false;
    for (const group of groups) {
      if (canAddToGroup(group, tile)) {
        group.push(tile);
        group.sort((a, b) => b.number - a.number);
        foundGroup = true;
        break;
      }
    }

    if (!foundGroup) {
      groups.push([tile]);
    }
  }

  const ungroupedTiles: Tile[] = [];
  for (const group of groups) {
    if (isValidSet(group)) {
      validGroups.push(group);
    } else {
      ungroupedTiles.push(...group);
    }
  }

  const newGroupLength = validGroups.length - existingGroupLength;
  while (ungroupedTiles.length > 0 && newGroupLength > 0) {
    const res = createSets(ungroupedTiles, validGroups);
    if (res.ungroupedTiles.length === ungroupedTiles.length) {
      break;
    } else {
      ungroupedTiles.splice(0, ungroupedTiles.length, ...res.ungroupedTiles);
    }
  }

  return { validGroups, ungroupedTiles };
}
