import { type PayloadAction } from '@reduxjs/toolkit';
import type { WritableDraft } from 'immer/dist/internal.js';
import { generateRandomTiles } from '../generateRandomTiles.js';
import { dealTiles } from '../dealTiles.js';
import type { Game, Games, Player } from './types.js';
import { chooseOkey } from '../chooseOkey.js';

export interface CreateGamePayload {
  id: string;
}

/**
 * Reducer to create a game
 * @param state - The current state
 * @param action - The action to perform with the data that is needed to create a new game
 */
export function createGame(state: WritableDraft<Games>, action: PayloadAction<CreateGamePayload>) {
  const { id } = action.payload;
  if (id in state) {
    throw new Error('Game already exists');
  }

  let tiles = generateRandomTiles();

  const { indicator, tiles: tempTiles } = chooseOkey(tiles);
  tiles = tempTiles;

  const players: Player[] = [
    { thrownTiles: [], tiles: [] },
    { thrownTiles: [], tiles: [] },
    { thrownTiles: [], tiles: [] },
    { thrownTiles: [], tiles: [] },
  ];

  for (let i = 0; i < players.length; i++) {
    const { playerHand, remainingTiles } = dealTiles(tiles, i === 0);
    players[i].tiles = playerHand;
    tiles = remainingTiles;
  }

  const game: Game = {
    players,
    tiles,
    indicator,
  };

  state[id] = game;
}
