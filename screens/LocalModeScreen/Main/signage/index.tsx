import { View } from "react-native"
import { PlayerAvatar } from "src/components/playerAvatar"
import { StyledText } from "src/components/styledText"
import { Container } from "./container"
import { Settings } from "./settings"

export const Signage = () => {
  return (
    <>
      <Container>
        <View
          style={{
            flexDirection: "row",
            alignItems: 'center',
            gap: 4,
            padding: 16,
            borderRadius: 16,
            backgroundColor: "#bb9e74",
          }}
        >
          <PlayerAvatar index={0}/><StyledText>のターン</StyledText>
        </View>
      </Container>
      <Settings/>
    </>

  )
}