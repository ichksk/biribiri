import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { PlayerSelect } from "./playerSelect"
import { ModeContext, useMode } from "src/contexts/mode"
import { GoBackButton } from "src/components/goBackButton"
import { GoNextButton } from "src/components/goNextButton"
import { RuleSelect } from "./ruleSelect"

export const Prepare = () => {
  const [ prepareMode, setPrepareMode ] = useState(0)
  const [ , setLocalMode ] = useMode()

  return (
    <ModeContext.Provider value={[prepareMode, setPrepareMode]}>
      <SafeAreaView
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: 'center',
          backgroundColor: "#fffbcf",
        }}
      >
        {prepareMode === 0 && <PlayerSelect/>}
        <GoBackButton/>
        <GoNextButton
          lastIndex={0}
          label="次へ"
          lastLabel="ゲーム開始"
          onLastClicked={() => setLocalMode(prev=>prev+1)}
        />
      </SafeAreaView>
    </ModeContext.Provider>
  )
}