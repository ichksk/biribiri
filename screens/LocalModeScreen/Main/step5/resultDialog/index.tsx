import { Dialog } from "@rneui/base"
import { useDialogVisible } from "../../context"
import { View } from "react-native"
import { Result } from "./result"
import { CloseButton } from "./closeButton"

export const ResultDialog = () => {
  const [ dialogVisible ] = useDialogVisible()

  return  (
      <Dialog
        isVisible={dialogVisible}
        overlayStyle={{
          backgroundColor: "white",
          borderRadius: 16,
        }}
      >
        <View
          style={{
            maxHeight: 400,
            height: 400,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Result/>
          <CloseButton/>
        </View>
      </Dialog>
  )
}

