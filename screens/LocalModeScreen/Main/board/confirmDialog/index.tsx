import { Button, ButtonGroup, Dialog, Text } from "@rneui/base"
import { useDialogVisible, useSelectedChair } from "../context"
import { OkButton } from "./okButton"
import { NoButton } from "./noButton"
import { View } from "react-native"

export const ConfirmDialog = () => {
  const [dialogVisible, setDialogVisible] = useDialogVisible()
  const [selectedChair] = useSelectedChair()

  return (
    <Dialog
      isVisible={dialogVisible}
      onBackdropPress={() => setDialogVisible(false)}
      overlayStyle={{
        backgroundColor: "white",
        borderRadius: 16,
        maxWidth: 400,
      }}

    >
      <View
        style={{
          gap: 16,
        }}
      >
        <Text
          style={{
            fontFamily: "YasashisaGothicBold",
            fontSize: 16
          }}
        >「{selectedChair}」にデンキイスをしかけますか？</Text>
        <View
          style={{
            justifyContent: "space-evenly",
            flexDirection: "row",
            gap: 16,
          }}
        >
          <OkButton/>
          <NoButton/>
        </View>
      </View>
    </Dialog>
  )
}