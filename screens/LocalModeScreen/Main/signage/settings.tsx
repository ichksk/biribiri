//ゲーム中の設定画面
//ゲームをやめるなどもここから

import { Button, Dialog, Icon, Text } from "@rneui/base"
import { useScreenState } from "globalStates/screenState"
import { useState } from "react"
import { SafeAreaView, View } from "react-native"
import { StyledText } from "src/components/styledText"

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
        <StyledText>設定</StyledText>
        <Button
          title="ゲームをやめる"
          onPress={() => {
            setScreenState("Title")
          }}
        />
      </Dialog>
      <SafeAreaView
        style={{
          position: 'absolute',
          right: 16,
          top: 100,
        }}
      >
        <Button
          type="clear"
          icon={
            <Icon
              name="settings"
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