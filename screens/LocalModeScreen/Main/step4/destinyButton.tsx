import { Button, Text } from "@rneui/base"
import { useAnsweredChair, useSelectedChair } from "globalStates/gameState"
import { StyleSheet, TouchableOpacity, Vibration } from "react-native"

export const DestinyButton = () => {
  const [ selectedChair ] = useSelectedChair()
  const [ answeredChair ] = useAnsweredChair() 

  return (
    <Button
      onPress={() => {
        setTimeout(() => {
          if(selectedChair===answeredChair){
            Vibration.vibrate();
          }
        }, 1000)
      }}
    >ボタンを押す</Button>
  )
}
const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    backgroundColor: '#4CAF50',
    elevation: 20,
    transform: [{ perspective: 400 }, { rotateX: '20deg' }],
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});