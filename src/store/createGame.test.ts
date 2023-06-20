import { describe, it, expect } from '@jest/globals';
import { createGame } from './createGame.js';
import type { Games } from './types.js';

describe('createGame', () => {
  it('should create a game properly', () => {
    const state: Games = {};
    createGame(state, { type: 'CREATE_GAME', payload: { id: '1' } });

    expect(state['1']).toBeDefined();

    const game = state['1'];

    expect(game.indicator).toBeDefined();
    expect(game.players.length).toEqual(4);
    for (let i = 0; i < game.players.length; i++) {
      expect(game.players[i].tiles.length).toEqual(i === 0 ? 15 : 14);
      expect(game.players[i].thrownTiles.length).toEqual(0);
    }
  });
});
