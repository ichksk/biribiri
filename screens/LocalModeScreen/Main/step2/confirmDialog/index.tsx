import { StyleSheet, View } from "react-native"
import { Dialog, Text } from "@rneui/base"
import { OkButton } from "./okButton"
import { NoButton } from "./noButton"
import { useDialogVisible, useCurrentChair } from "../../context"

export const ConfirmDialog = () => {
  const [ dialogVisible, setDialogVisible ] = useDialogVisible()
  const [ currentChair ] = useCurrentChair()

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
        <View
          style={{
            paddingVertical: 16,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.confirmMessage}>「{currentChair}」にデンキイスをしかけますか？</Text>
        </View>
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

const styles = StyleSheet.create({
  confirmMessage: {
    fontFamily: "YasashisaGothicBold",
    fontSize: 16,
  }
})