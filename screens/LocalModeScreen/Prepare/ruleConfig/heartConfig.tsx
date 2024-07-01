import { Icon, Text } from "@rneui/base"
import { TouchableOpacity, View } from "react-native"
import { StyledIcon } from "./styledIcon"
import { MaxHeart, useHeartConfig } from "globalStates/gameState"

export const HeartConfig = () => {
  const [ heartConfig, setHeartConfig ] = useHeartConfig()
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
          fontFamily: "YasashisaGothicBold",
          fontSize: 20,
        }}
      >ハートの数</Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <StyledIcon
          name="remove"
          disabled={heartConfig<=1}
          onPress={() => {
            setHeartConfig(prev=>prev-1)
          }}
        />
          {Array.from({length: MaxHeart}, (v, k)=>MaxHeart-k).map(i => (
            <Icon
              key={i}
              color="#ff3333"
              name="heart"
              type="material-community"
            />
          ))}
        <StyledIcon
          name="add"
          disabled={heartConfig>=MaxHeart}
          onPress={() => {
            console.log("Added")
          }}
        />
      </View>
    </View>
  )
}