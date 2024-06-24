import { View } from "react-native"
import { PlayerAvatar } from "src/components/playerAvatar"
import { Container } from "./container"
import { Text } from "@rneui/base"

export const Signage = ({currentPlayerIndex} : {currentPlayerIndex: number}) => {
  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          alignItems: 'center',
          gap: 9,
          padding: 16,
          borderRadius: 16,
          backgroundColor: "#bb9e74",
        }}
      >
        <PlayerAvatar index={ currentPlayerIndex }/>
        <Text
          style={{
            fontFamily: "YasashisaGothicBold",
            fontSize: 24,
          }}
        >のターン</Text>
      </View>
    </Container>
  )
}