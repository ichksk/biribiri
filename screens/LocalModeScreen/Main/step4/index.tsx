import { SafeAreaView } from "react-native"
import { DestinyButton } from "./destinyButton"
import { DialogVisibleContext } from "../context"
import { useState } from "react"
import { ResultDialog } from "./resultDialog"
import { CheckResultContext } from "./context"
import { BoardWithAvatar } from "./boardWithAvatar"

export const Step4 = () => {
  return (
    <DialogVisibleContext.Provider value={useState(false)}>
      <CheckResultContext.Provider value={useState(false)}>
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
      </CheckResultContext.Provider>
    </DialogVisibleContext.Provider>
    )
}