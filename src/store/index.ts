import { createSlice, configureStore } from '@reduxjs/toolkit';

import type { Games } from './types.js';
import { createGame } from './createGame.js';

const initialState: Games = {};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    createGame,
  },
});

const actions = gamesSlice.actions;

const store = configureStore({
  reducer: gamesSlice.reducer,
});

store.dispatch(actions.createGame({ id: '1' }));
