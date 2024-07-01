import { CheckBox, Icon, Text } from "@rneui/base"
import { TouchableOpacity, View } from "react-native"

import { useState } from "react"
import * as Haptics from "expo-haptics"

export const RuleConfig = () => {
  const beginnerConfig = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)
    setSelectedIndex(1)
  }

  const suddenDeathConfig = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)
    setSelectedIndex(2)
  }

  const [ selectedIndex, setSelectedIndex ] = useState(1)

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontFamily: "YasashisaGothicBold",
          marginBottom: 32,
        }}
      >モード設定</Text>
      <View
        style={{
          backgroundColor: "#eab8a2",
          padding: 32,
          borderRadius: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 50,
            alignItems: "center",
          }}
        >
          <CheckBox
            title={"初心者モード"}
            containerStyle={{
              backgroundColor: "transparent"
            }}
            titleProps={{
              style:{
                fontSize: 20,
                fontFamily: "YasashisaGothicBold",
                paddingLeft: 16,
              }
            }}
            checked={selectedIndex===1}
            checkedIcon="check"
            uncheckedIcon={""}
            onPress={beginnerConfig}
            onLongPress={beginnerConfig}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 50,
            alignItems: "center",
          }}
        >
          <CheckBox
            title={"サドンデスモード"}
            containerStyle={{
              backgroundColor: "transparent"
            }}
            titleProps={{
              style:{
                fontSize: 20,
                fontFamily: "YasashisaGothicBold",
                paddingLeft: 16,
              }
            }}
            checked={selectedIndex===2}
            checkedIcon="check"
            uncheckedIcon={""}
            onPress={suddenDeathConfig}
            onLongPress={suddenDeathConfig}
          />
        </View>
      </View>
    </View>
  )
}