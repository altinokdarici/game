import { describe, it, expect } from '@jest/globals';
import { generateRandomTiles } from './generateRandomTiles.js';

describe('getRandomTiles', () => {
  it('should return all possible tiles', () => {
    const result = generateRandomTiles();
    expect(result.length).toBe(104);

    const tiles = new Set<string>(result.map((r) => JSON.stringify(r)));
    expect(tiles.size).toBe(52);
  });
});
