import { Icon, IconProps } from "@rneui/base"
import { TouchableOpacity } from "react-native"

export const StyledIcon = ({onPress, disabled, ...props}: IconProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
    >
      <Icon
        type="ionicon"
        {...props}
      />
    </TouchableOpacity>
  )
}