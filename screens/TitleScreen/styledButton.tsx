import { Button, ButtonProps } from "@rneui/base"

export const StyledButton = ({titleStyle, buttonStyle, containerStyle, ...props}: ButtonProps) => {
  return (
    <Button
      titleStyle={[{
        fontFamily: "TsunagiGothic",
        fontSize: 24,
      }, titleStyle]}

      buttonStyle={[{
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#94D1B9",
      }, buttonStyle]}

      containerStyle={[{
        borderRadius: 16,
      }, containerStyle]}

      activeOpacity={0.6}
      {...props}
    />
  )
}