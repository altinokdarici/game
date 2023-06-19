import { describe, it, expect } from '@jest/globals';
import { createSets } from './createSets.js';
import { parseTiles } from './tiles.js';

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
      'R5',
    );

    const sets = createSets(tiles);

    const expected = {
      ungroupedTiles: [{ type: 'Regular', color: 'Green', number: 13 }],
      validGroups: [
        [
          { type: 'Regular', color: 'Black', number: 13 },
          { type: 'Regular', color: 'Black', number: 12 },
          { type: 'Regular', color: 'Black', number: 11 },
        ],
        [
          { type: 'Regular', color: 'Black', number: 4 },
          { type: 'Regular', color: 'Black', number: 3 },
          { type: 'Regular', color: 'Black', number: 2 },
          { type: 'Regular', color: 'Black', number: 1 },
        ],
        [
          { type: 'Regular', color: 'Green', number: 13 },
          { type: 'Regular', color: 'Red', number: 13 },
          { type: 'Regular', color: 'Yellow', number: 13 },
          { type: 'Regular', color: 'Black', number: 13 },
        ],
        [
          { type: 'Regular', color: 'Red', number: 6 },
          { type: 'Regular', color: 'Red', number: 5 },
          { type: 'Regular', color: 'Red', number: 4 },
        ],
      ],
    };

    expect(sets).toEqual(expected);
  });
});
