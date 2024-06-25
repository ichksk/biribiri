import { Button, ButtonProps } from "@rneui/base"

export const StyledButton = ({titleStyle, containerStyle, ...props}: ButtonProps) => {
  return (
    <Button
      titleStyle={[{
        fontFamily: "YasashisaGothicBold"
      }, titleStyle]}

      containerStyle={[{
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
      }, containerStyle]}

      activeOpacity={0.6}

      {...props}
    />

  )
}