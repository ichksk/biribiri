import { atom, useRecoilState } from "recoil";
import { PlayerState, defaultPlayersState } from "./playersState";


export type GameState = {
  players: PlayerState[];
  currentPlayerIndex: 0,
  currentTurn: number,
}

export const gameStateAtom = atom<GameState>({
  key: 'gameStateAtom',
  default: {
    players: defaultPlayersState,
    currentPlayerIndex: 0,
    currentTurn: 1,
  } as GameState
});

export const useGameState = () => useRecoilState(gameStateAtom)