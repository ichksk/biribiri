import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Prepare } from "./Prepare"
import { Main } from "./Main"
import { ModeContext } from "src/contexts/mode"

export const LocalModeScreen = () => {
  const [ modeState, setModeState ] = useState(0)

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        display: "flex",
        alignItems: 'center',
        backgroundColor: "#fffbcf",
      }}
    >
      <ModeContext.Provider value={[modeState, setModeState]}>
        {modeState === 0 && <Prepare/>}
        {modeState === 1 && <Main/>}
      </ModeContext.Provider>
    </SafeAreaView>
  )
}