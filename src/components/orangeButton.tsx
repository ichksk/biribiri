import { Button, ButtonProps, Text } from "@rneui/base"

export const OrangeButton = (props: ButtonProps) => {
  return (
    <Button
      containerStyle={{
        position: "absolute",
        bottom: 40,
        borderRadius: 8,
      }}
      buttonStyle={{
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: "#FF9933",
      }}
      activeOpacity={0.6}
      {...props}
    >
      <Text
        style={{
          fontFamily: "TsunagiGothic",
          fontSize: 24,
          color: "white",
        }}
      >{props.title}</Text>
    </Button>
  )
}