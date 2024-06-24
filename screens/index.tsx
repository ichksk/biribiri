import { useScreenState } from "globalStates/screenState"
import { TitleScreen } from "./TitleScreen"
import { LocalModeScreen } from "./LocalModeScreen"
import { MultiModeScreen } from "./MultiModeScreen"

export const TopView = () => {
  const [ screenMode ] = useScreenState()
  if (screenMode === "Title") return <TitleScreen/>
  else if (screenMode === "Local") return <LocalModeScreen/>
  else if (screenMode === "Multi") return <MultiModeScreen/>
}