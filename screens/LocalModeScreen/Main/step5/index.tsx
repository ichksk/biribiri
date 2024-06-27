import { SafeAreaView } from "react-native"
import { DestinyButton } from "./destinyButton"
import { DialogVisibleContext } from "../context"
import { useState } from "react"
import { ResultDialog } from "./resultDialog"
import { BoardWithAvatar } from "./boardWithAvatar"

export const Step5 = () => {
  return (
    <DialogVisibleContext.Provider value={useState(false)}>
        <SafeAreaView
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BoardWithAvatar/>
          <DestinyButton/>
        </SafeAreaView>
        <ResultDialog/>
    </DialogVisibleContext.Provider>
    )
}