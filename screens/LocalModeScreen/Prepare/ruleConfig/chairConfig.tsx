import { Icon, Text } from "@rneui/base"
import { useChairConfig } from "globalStates/gameState"
import { TouchableOpacity, View } from "react-native"
import { StyledIcon } from "./styledIcon"

export const ChairConfig = () => {
  const [ chairConfig, setChairConfig ] = useChairConfig()

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          fontFamily: "YasashisaGothicBold",
          fontSize: 20,
        }}
      >デンキイスの数</Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <StyledIcon
          name="remove"
          onPress={() => {
            console.log("Removed")
          }}
        />
        <StyledIcon
          name="add"
          onPress={() => {
            console.log("Added")
          }}
        />
      </View>
    </View>
  )
}