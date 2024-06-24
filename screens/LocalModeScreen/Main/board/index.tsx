import { Dimensions, View } from "react-native"
import { Chair } from "./chair"
import { useRestChairs } from "globalStates/gameState"

export const Board = () => {
  const height = Dimensions.get("screen").height
  const minWH = 400
  const chair_r = 24
  const circle_r = minWH * 0.4 - chair_r

  const [ restChairs ] = useRestChairs()

  return (
    <View
      style={{
        position: "absolute",
        top: height * 0.6,
        left: "auto",
      }}
    >
      {
        restChairs.map(index => {
          const radians = (360 / 12 * Math.PI) / 180
          const radian120 = 120 * Math.PI / 180
          var x = Math.cos(radians * index - radian120) * circle_r - chair_r;
          var y = Math.sin(radians * index - radian120) * circle_r - chair_r;
          return (
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