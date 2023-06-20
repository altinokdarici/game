import { describe, it, expect } from '@jest/globals';
import { type TileString, tile } from './tile.js';
import type { Tile } from './types.js';

describe('tile', () => {
  it('should return a tile with one letter one number', () => {
    const input = tile('B1');
    const expected: Tile = {
      type: 'Regular',
      color: 'Black',
      number: 1,
    };
    expect(input).toStrictEqual(expected);
  });

  it('should return a tile with one letter two numbers', () => {
    const input = tile('B12');
    const expected: Tile = {
      type: 'Regular',
      color: 'Black',
      number: 12,
    };
    expect(input).toStrictEqual(expected);
  });

  it('should return a tile with one letter two numbers and type', () => {
    const input = tile('B12O');
    const expected: Tile = {
      type: 'Okey',
      color: 'Black',
      number: 12,
    };
    expect(input).toStrictEqual(expected);
  });

  it('should return a tile with one letter two numbers and type when its provided as parameters', () => {
    const input = tile('Black', 12, 'Okey');
    const expected: Tile = {
      type: 'Okey',
      color: 'Black',
      number: 12,
    };
    expect(input).toStrictEqual(expected);
  });

  it('should throw an error with one letter two numbers that are greater than excepted', () => {
    expect(() => tile('B14')).toThrowError();
  });

  it('should throw an error with unknown letter', () => {
    expect(() => tile('K13' as TileString)).toThrowError();
  });
});
