import { useEffect } from "react"
import { SafeAreaView } from "react-native"
import { defaultPlayersState, useAnsweredChair, useCurrentStep, useCurrentTurn, usePlayers, useRestChairs, useSelectedChair } from "globalStates/gameState"
import { Settings } from "./settings"
import { Step1 } from "./step1"
import { Step2 } from "./step2"
import { Step3 } from "./step3"
import { Step4 } from "./step4"
import { Step5 } from "./step5"

//スコアを表示するボード
//円盤上にChairを描画する


export const Main = () => {
  const [ currentStep, setCurrentStep ] = useCurrentStep()
  const [ , setCurrentTurn ]  = useCurrentTurn()
  const [ , setRestChairs ] = useRestChairs()
  const [ , setSelectedChair ] = useSelectedChair()
  const [ , setAnsweredChair ] = useAnsweredChair()
  const [ , setPlayers ] = usePlayers()

  useEffect(() => {
    //ゲーム開始時の初期化処理
    setCurrentStep(1)
    setCurrentTurn(1)
    setSelectedChair(-1)
    setAnsweredChair(-1)
    setPlayers(defaultPlayersState)
    setRestChairs([1,2,3,4,5,6,7,8,9,10,11,12])
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