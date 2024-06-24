import { View } from "react-native"
import { PlayerAvatar } from "src/components/playerAvatar"
import { Container } from "./container"
import { Settings } from "./settings"
import { Text } from "@rneui/base"

export const Signage = () => {
  return (
    <>
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
          <PlayerAvatar index={0}/>
          <Text
            style={{
              fontFamily: "YasashisaGothicBold",
              fontSize: 24,
            }}
          >のターン</Text>
        </View>
      </Container>
      <Settings/>
    </>

  )
}