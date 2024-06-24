import { View, ViewProps } from "react-native"

export const Container = (props: ViewProps) => {
  return (
    <View
      style={{
        position: "absolute",
        top: 100,
      }}
      {...props}
    />
  )
}