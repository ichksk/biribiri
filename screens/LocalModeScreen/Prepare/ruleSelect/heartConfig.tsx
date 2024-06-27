import { Icon, Text } from "@rneui/base"
import { TouchableOpacity, View } from "react-native"

export const HeartConfig = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Text
        style={{
          fontFamily: "TsunagiGothic",
          fontSize: 24,
        }}
      >ハートの数</Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity>
          <Icon
            name="remove"
            type="ionicon"
          />
        </TouchableOpacity>
          <Icon
            name="heart"
            type="ionicon"
            color="#ff3333"
          />
        <TouchableOpacity>
          <Icon
            name="add"
            type="ionicon"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}