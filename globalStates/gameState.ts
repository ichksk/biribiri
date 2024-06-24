import { atom, useRecoilState } from "recoil";
import { PlayerState, defaultPlayersState } from "./playersState";


//ゲームを表現するのに必要な要素
//・残っているデンキイス
//・プレイヤー情報(アバター、スコア)
//・現在のターンステップ
//・現在のターン数
//・n-1ターンまでのゲームの履歴

export type GameState = {
  players: PlayerState[];
  currentPlayerIndex: number,
  currentTurn: number,
}

export const gameStateAtom = atom<GameState>({
  key: 'gameStateAtom',
  default: {
    players: defaultPlayersState,
    currentPlayerIndex: 0,
    currentTurn: 1,
  }
});

export const useGameState = () => useRecoilState(gameStateAtom)