import { atom, useRecoilState } from "recoil";
import { PlayerState } from "./playersState";


export type GameState = {
  players: PlayerState[];
  currentPlayer: PlayerState,
  currentTurn: number,
}

export const gameStateAtom = atom<GameState>({
  key: 'gameStateAtom',
  default: {} as GameState
});

export const useGameState = () => useRecoilState(gameStateAtom)