import { SetterOrUpdater, atom, useRecoilState } from "recoil";

export type PlayerState = {
  name: string;
  avatar: string;
  score: number;
}

function getRandomAvatar(): string {
  const min = 1;
  const max = 24;
  const index = Math.floor(Math.random() * (max - min + 1) + min); // 上限を含み、下限も含む
  return String(index).padStart(3, "0")
}

export const defaultPlayersState: PlayerState[] = [
  {
    name: "",
    avatar: getRandomAvatar(),
    score: 0,
  },
  {
    name: "",
    avatar: getRandomAvatar(),
    score: 0,
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