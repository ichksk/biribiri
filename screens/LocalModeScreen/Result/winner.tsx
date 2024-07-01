import { useHeartConfig, usePlayers, useRestChairs } from "globalStates/gameState"
import { PlayerAvatar } from "src/components/playerAvatar"

export const Winner = () => {
  const [ players ] = usePlayers()
  const [ restChairs ] = useRestChairs()
  const [ heartConfig ] = useHeartConfig()

  const findWinnersIndex = () => {
    if (restChairs.length === 0 ) {
      const winnersScore = Math.max(...players.map(player=>player.score))
      const winnersIndex = players.findIndex(player => player.score === winnersScore)
      return winnersIndex
    } else {
      const winnersIndex = players.findIndex(player => player.damage !== heartConfig || player.score >= 30)
      return winnersIndex
    }
  }

  return (
    <PlayerAvatar index={findWinnersIndex()}/>
  )
}