import { SetterOrUpdater, atom, useRecoilState } from "recoil";

export type PlayerState = {
  avatar: string;
  score: number;
  damage: number;
}

export const getRandomAvatar = () => {
  const min = 1;
  const max = 24;
  const index = Math.floor(Math.random() * (max - min + 1) + min); // 上限を含み、下限も含む
  return String(index).padStart(3, "0")
}

export const defaultPlayersState: PlayerState[] = [
  {
    avatar: getRandomAvatar(),
    score: 0,
    damage: 0,
  },
  {
    avatar: getRandomAvatar(),
    score: 0,
    damage: 0
  }
] as const

export const playersStateAtom = atom<PlayerState[]>({
  key: 'playersStateAtom',
  default: defaultPlayersState,
});

export const usePlayers = () => useRecoilState(playersStateAtom);

export const usePlayer = (index:number) => {
  const [players, setPlayers] = usePlayers();

  const setPlayer : SetterOrUpdater<PlayerState> = (valOrUpdater) => {
    if(typeof valOrUpdater === "function") {
      setPlayers(prev => prev.map((player, i) => i===index ? valOrUpdater(player) : player))
    } else {
      setPlayers(prev => prev.map((player, i) => i===index ? valOrUpdater : player))
    }
  }

  return  [players[index] , setPlayer] as [PlayerState, SetterOrUpdater<PlayerState>]
}


//ゲームを表現するのに必要な要素
//・残っているデンキイス
//・プレイヤー情報(アバター、スコア)
//・現在のステップ
//・現在のターン数
//・n-1ターンまでのゲームの履歴

export const currentTurnAtom = atom<number>({
  key: "currentTurnAtom",
  default: 1,
})
export const useCurrentTurn = () => useRecoilState(currentTurnAtom)

export const restChairsAtom = atom<number[]>({
  key: "restChairsAtom",
  default: [1,2,3,4,5,6,7,8,9,10,11,12]
})
export const useRestChairs = () => useRecoilState(restChairsAtom)

export const currentStepAtom = atom<number>({
  key: "currentStepAtom",
  default: 1,
})
export const useCurrentStep = () => useRecoilState(currentStepAtom)


export const selectedChairAtom = atom<number>({
  key: "selectedChairAtom",
  default: -1,
})
export const useSelectedChair = () => useRecoilState(selectedChairAtom)

export const answeredChairAtom = atom<number>({
  key: "answeredChairAtom",
  default: -1,
})
export const useAnsweredChair = () => useRecoilState(answeredChairAtom)

export const useInitializeGame = () => {
  const [ , setCurrentStep ] = useCurrentStep()
  const [ , setCurrentTurn ]  = useCurrentTurn()
  const [ , setRestChairs ] = useRestChairs()
  const [ , setSelectedChair ] = useSelectedChair()
  const [ , setAnsweredChair ] = useAnsweredChair()
  const [ , setPlayers ] = usePlayers()

  const initializeGame = () => {
    setCurrentStep(1)
    setCurrentTurn(1)
    setSelectedChair(-1)
    setAnsweredChair(-1)
    setPlayers(prev=>([
      {
        ...prev[0],
        score: 0,
        damage: 0,
      },
      {
        ...prev[1],
        score: 0,
        damage: 0,
      }
    ]))
    setRestChairs([1,2,3,4,5,6,7,8,9,10,11,12])
  }

  return initializeGame

}