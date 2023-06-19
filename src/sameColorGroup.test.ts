import { describe, it, expect } from '@jest/globals';
import { sameColorGroup, sameNumberGroup } from './sameColorGroup';
import { tile } from './tile';

describe('sameColorGroup', () => {
  it('sameColorGroup should work', () => {
    const result = sameColorGroup([tile('Green', 12), tile('Green', 11)]);
    expect(result).toEqual(true);
  });
  it('sameColorGroup should not work', () => {
    const result = sameColorGroup([
      tile('Green', 12),
      tile('Green', 11),
      tile('Red', 10),
    ]);
    expect(result).toEqual(false);
  });

  it('sameNumberGroup should work', () => {
    const result = sameNumberGroup([tile('Red', 11), tile('Green', 11)]);
    expect(result).toEqual(true);
  });
  it('sameNumberGroup should not work', () => {
    const result = sameNumberGroup([tile('Red', 12), tile('Green', 11)]);
    expect(result).toEqual(false);
  });
});
