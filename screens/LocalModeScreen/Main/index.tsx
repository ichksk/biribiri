import { useEffect, useState } from "react"
import { SafeAreaView } from "react-native"
import { useCurrentStep, useCurrentTurn, useRestChairs } from "globalStates/gameState"
import { DialogVisibleContext, SelectedChairContext } from "./context"
import { Step1 } from "./step1"
import { Step2 } from "./step2"
import { Step3 } from "./step3"
import { Settings } from "./settings"

//スコアを表示するボード
//円盤上にChairを描画する


export const Main = () => {
  const [ currentStep, setCurrentStep ] = useCurrentStep()
  const [ , setCurrentTurn ]  = useCurrentTurn()
  const [ , setRestChairs ] = useRestChairs()
  const [ selectedChair, setSelectedChair ] = useState(-1)
  const [ dialogVisible, setDialogVisible ] = useState(false)

  useEffect(() => {
    setCurrentStep(1)
    setCurrentTurn(1)
    setRestChairs([1,2,3,4,5,6,7,8,9,10,11,12])
  }, [])

  return (
    <SelectedChairContext.Provider value={[selectedChair, setSelectedChair]}>
      <DialogVisibleContext.Provider value={[dialogVisible, setDialogVisible]}>
        <SafeAreaView
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#fffbcf",
          }}
        >
          {currentStep===1 && <Step1/>}
          {currentStep===2 && <Step2/>}
          {currentStep===3 && <Step3/>}
        </SafeAreaView>
        <Settings/>
      </DialogVisibleContext.Provider>
    </SelectedChairContext.Provider>

  )
}