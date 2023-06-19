import { describe, it, expect } from '@jest/globals';
import { createSets } from './createSets';
import { parseTiles } from './tiles';
import { RegularTile } from './types';

describe('createSets', () => {
  it('should work', () => {
    const tiles = parseTiles(
      'G13',
      'B12',
      'B13',
      'R13',
      'Y13',
      'R6',
      'B1',
      'G13',
      'B13',
      'B3',
      'B4',
      'B11',
      'B2',
      'R4',
      'R5'
    );

    const sets = createSets(tiles);

    const expected = {
      ungroupedTiles: [{ type: 'RegularTile', color: 'Green', number: 13 }],
      validGroups: [
        [
          { type: 'RegularTile', color: 'Black', number: 13 },
          { type: 'RegularTile', color: 'Black', number: 12 },
          { type: 'RegularTile', color: 'Black', number: 11 },
        ],
        [
          { type: 'RegularTile', color: 'Black', number: 4 },
          { type: 'RegularTile', color: 'Black', number: 3 },
          { type: 'RegularTile', color: 'Black', number: 2 },
          { type: 'RegularTile', color: 'Black', number: 1 },
        ],
        [
          { type: 'RegularTile', color: 'Green', number: 13 },
          { type: 'RegularTile', color: 'Red', number: 13 },
          { type: 'RegularTile', color: 'Yellow', number: 13 },
          { type: 'RegularTile', color: 'Black', number: 13 },
        ],
        [
          { type: 'RegularTile', color: 'Red', number: 6 },
          { type: 'RegularTile', color: 'Red', number: 5 },
          { type: 'RegularTile', color: 'Red', number: 4 },
        ],
      ],
    };

    expect(sets).toEqual(expected);
  });
});
