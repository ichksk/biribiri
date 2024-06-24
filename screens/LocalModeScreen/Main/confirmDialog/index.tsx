import { Dialog, Icon, Text } from "@rneui/base"
import { useDialogVisible, useSelectedChair } from "../context"
import { OkButton } from "./okButton"
import { NoButton } from "./noButton"
import { StyleSheet, View } from "react-native"

export const ConfirmDialog = () => {
  const [ dialogVisible, setDialogVisible ] = useDialogVisible()
  const [ selectedChair ] = useSelectedChair()

  const ConfirmMessage = (
    <>
    <Text style={styles.confirmMessage}>「{selectedChair}番」にデンキイス</Text>
    <Icon
      iconStyle={{
        color: "#FFCC33",
      }}
      name="lightning-bolt"
      type="material-community"
    />
    <Text style={styles.confirmMessage}>をしかけますか？</Text>
    </>

  )

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
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {ConfirmMessage}
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