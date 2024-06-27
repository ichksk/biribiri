//ゲーム中の設定画面
//ゲームをやめるなどもここから

import { Button, Dialog, Icon, Text } from "@rneui/base"
import { useScreenState } from "globalStates/screenState"
import { useState } from "react"
import { SafeAreaView } from "react-native"
import { CurrentScore } from "./step1/currentScore"
import { OrangeButton } from "src/components/orangeButton"

export const Settings = () => {
  const [ visible, setVisible ] = useState(false)
  const [ , setScreenState ] = useScreenState()

  return (
    <>
      <Dialog
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        overlayStyle={{
          backgroundColor: "white",
          borderRadius: 16,
        }}
      >
        <Text
          style={{
            fontFamily: "YasashisaGothicBold",
            fontSize: 24,
          }}
        >設定</Text>
        <CurrentScore/>
        <OrangeButton
          title="ゲームをやめる"
          containerStyle={{
            position: "relative",
            borderRadius: 8,
          }}
          onPress={() => {
            setScreenState("Title")
          }}
        />
      </Dialog>
      <SafeAreaView
        style={{
          position: 'absolute',
          top: 100,
          right: 16,
        }}
      >
        <Button
          type="clear"
          icon={
            <Icon
              name="three-bars"
              type="octicon"
              size={32}
              color="black"
            />
          }
          onPress={() => setVisible(true)}
        />
      </SafeAreaView>
    </>
  )
}