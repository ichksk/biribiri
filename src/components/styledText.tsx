import { Text, TextProps } from "@rneui/base"

export const StyledText = (props: TextProps) => {
  return (
    <Text
      style={{
        fontFamily: "TsunagiGothic",
        fontSize: 24,
      }}
      {...props}
    />
  )
}