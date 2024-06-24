import { Dimensions, View } from "react-native"
import { Chair } from "./chair"

export const Board = () => {
  // const width = Dimensions.get("screen").width
  // const height = Dimensions.get("screen").height
  const minWH = 400
  const chair_r = 24
  const circle_r = minWH * 0.4 - chair_r

  return (
    <View
      style={{
        position: "absolute",
      }}
    >
      {
        Array.from({length: 12}, (_, i) => i+1).map(index => {
          const deg = 360 / 12
          const radians = (deg * Math.PI) / 180
          const radian120 = 120 * Math.PI / 180
          var x = Math.cos(radians * index - radian120) * circle_r -chair_r;
          var y = Math.sin(radians * index - radian120) * circle_r -chair_r;
          return (
            <Chair
              visible={(index !== 1) && (index !== 2) } //テスト
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