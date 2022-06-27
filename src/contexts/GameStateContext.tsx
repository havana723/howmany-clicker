import React from "react";
import { defaultState, GameState } from "../types/game";

export const GameStateContext = React.createContext({
  state: defaultState,
  setGameState: (() => {}) as React.Dispatch<React.SetStateAction<GameState>>,
});
