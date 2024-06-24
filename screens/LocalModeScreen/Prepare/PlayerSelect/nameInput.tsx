import { TextInput, TextInputProps } from "react-native"

export const NameInput = (props: TextInputProps) => {
  return (
    <TextInput
      {...props}
      style={{
        fontFamily: "TsunagiGothic",
        fontSize: 16,
        height: 40,
        width: 160,
        borderWidth: 1,
        paddingHorizontal: 16,
        borderRadius: 8
      }}
    />
  )
}