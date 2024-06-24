import { useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { PlayerSelect } from "./PlayerSelect"
import { ModeContext, useMode } from "src/contexts/mode"
import { GoBackButton } from "src/components/goBackButton"
import { GoNextButton } from "src/components/goNextButton"

export const Prepare = () => {
  const [ prepareMode, setPrepareMode ] = useState<number>(0)
  const [ , setLocalMode ] = useMode()

  useEffect(() => {

  }, [])

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
      <ModeContext.Provider value={[prepareMode, setPrepareMode]}>
        {prepareMode === 0 && <PlayerSelect/>}
        <GoBackButton/>
        <GoNextButton
          lastIndex={0}
          label="次へ"
          lastLabel="ゲーム開始"
          onLastClicked={() => {
            setLocalMode(prev=>prev+1)
          }}
        />
      </ModeContext.Provider>
    </SafeAreaView>
  )
}