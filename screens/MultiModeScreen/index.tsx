import { GoBackButton } from "src/components/goBackButton"
import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { ModeContext } from "src/contexts/mode"
import { GoNextButton } from "src/components/goNextButton"

export const MultiModeScreen = () => {
  const [ modeState, setModeState ] = useState(0)

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fffbcf",
        alignItems: 'center',
      }}
    >
      <ModeContext.Provider value={[modeState, setModeState]}>
        <GoBackButton/>
        <GoNextButton
          label="次へ"
          lastIndex={2}
          lastLabel="ゲーム開始"
          onLastClicked={() => {}}
        />
      </ModeContext.Provider>
    </SafeAreaView>
  )
}