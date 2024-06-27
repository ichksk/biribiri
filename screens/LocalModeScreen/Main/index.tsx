import { useEffect } from "react"
import { SafeAreaView } from "react-native"
import { useCurrentStep, useInitializeGame } from "globalStates/gameState"
import { Settings } from "./settings"
import { Step1 } from "./step1"
import { Step2 } from "./step2"
import { Step3 } from "./step3"
import { Step4 } from "./step4"
import { Step5 } from "./step5"

//スコアを表示するボード
//円盤上にChairを描画する


export const Main = () => {
  const [ currentStep ] = useCurrentStep()
  const initializeGame = useInitializeGame()


  useEffect(() => {
    //ゲーム開始時の初期化処理
    initializeGame()
  }, [])


  return (
    <>
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
        {currentStep===4 && <Step4/>}
        {currentStep===5 && <Step5/>}
      </SafeAreaView>
      <Settings/>
    </>
  )
}