import { Dimensions, View } from "react-native"
import { Chair } from "./chair"

export const Board = () => {
  // const width = Dimensions.get("screen").width
  const height = Dimensions.get("screen").height
  const minWH = 400
  const chair_r = 24
  const circle_r = minWH * 0.4 - chair_r

  return (
    <View
      style={{
        position: "absolute",
        top: height * 0.6,
        left: "auto",
      }}
    >
      {
        [1,2,3,4,5,6,7,8,9,10,11,12].map(index => {
          const deg = 360 / 12
          const radians = (deg * Math.PI) / 180
          const radian120 = 120 * Math.PI / 180
          var x = Math.cos(radians * index - radian120) * circle_r -chair_r;
          var y = Math.sin(radians * index - radian120) * circle_r -chair_r;
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