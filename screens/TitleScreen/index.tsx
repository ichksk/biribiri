import { SafeAreaView } from "react-native-safe-area-context"
import { TitleLabel } from "./titleLabel"
import { LocalModeButton } from "./localModeButton"
import { MultiModeButton } from "./multiModeButton"

export const TitleScreen = () => {
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fffbcf",
        flexDirection: "column",
        alignItems: 'center',
      }}
    >
      <TitleLabel/>
      <LocalModeButton/>
      <MultiModeButton/>
    </SafeAreaView>
  )
}