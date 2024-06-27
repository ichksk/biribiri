import { Icon, Text } from "@rneui/base"
import { TouchableOpacity, View } from "react-native"

export const ChairConfig = () => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          fontFamily: "TsunagiGothic",
          fontSize: 24,
        }}
      >デンキイスの数</Text>
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