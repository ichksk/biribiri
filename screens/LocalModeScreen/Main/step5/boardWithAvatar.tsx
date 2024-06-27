import { useAnsweredChair, useCurrentTurn, useRestChairs, useSelectedChair } from "globalStates/gameState"
import { Dimensions, View } from "react-native"
import { Chair } from "../board/chair"
import { PlayerAvatar } from "src/components/playerAvatar"

export const BoardWithAvatar = () => {
  const height = Dimensions.get("screen").height
  const minWH = 400
  const chair_r = 24
  const circle_r = minWH * 0.4 - chair_r

  const [ restChairs ] = useRestChairs()
  const [ currentTurn ] = useCurrentTurn()
  const [ answeredChair ] = useAnsweredChair()

  return (
    <View
      style={{
        position: "absolute",
        top: height * 0.50,
        left: "auto",
      }}
    >
      {
        restChairs.map(index => {
          const radians = (360 / 12 * Math.PI) / 180
          const radian90 = 90 * Math.PI / 180
          var x = Math.cos(radians * index - radian90) * circle_r - chair_r;
          var y = Math.sin(radians * index - radian90) * circle_r - chair_r;

          if(answeredChair === index) return (
            <View
              key={index}
              style={{
                width: 48,
                height: 48,
                position: "absolute",
                top: y,
                left: x,
                borderRadius: 24,
                borderColor: "black",
                borderWidth: 1,
              }}
            >
              <PlayerAvatar
                index={currentTurn%2}
                size={46}
              />
            </View>
          )
          else return (
            <Chair
              visible={true} //テスト
              key={index}
              index={index}
              x={x}
              y={y}
            />
          )
        })
      }

    </View>
  )
}