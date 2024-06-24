import { Avatar, AvatarProps, Dialog } from "@rneui/base"
import { usePlayer } from "globalStates/playersState"
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

export interface PlayerAvatarProps extends AvatarProps {
  index: number;
  editable?: boolean;
}

const avatars = {
  "001": require("assets/images/avatar/avatar_001.jpg"),
  "002": require("assets/images/avatar/avatar_002.jpg"),
  "003": require("assets/images/avatar/avatar_003.jpg"),
  "004": require("assets/images/avatar/avatar_004.jpg"),
  "005": require("assets/images/avatar/avatar_005.jpg"),
  "006": require("assets/images/avatar/avatar_006.jpg"),
  "007": require("assets/images/avatar/avatar_007.jpg"),
  "008": require("assets/images/avatar/avatar_008.jpg"),
  "009": require("assets/images/avatar/avatar_009.jpg"),
  "010": require("assets/images/avatar/avatar_010.jpg"),
  "011": require("assets/images/avatar/avatar_011.jpg"),
  "012": require("assets/images/avatar/avatar_012.jpg"),
  "013": require("assets/images/avatar/avatar_013.jpg"),
  "014": require("assets/images/avatar/avatar_014.jpg"),
  "015": require("assets/images/avatar/avatar_015.jpg"),
  "016": require("assets/images/avatar/avatar_016.jpg"),
  "017": require("assets/images/avatar/avatar_017.jpg"),
  "018": require("assets/images/avatar/avatar_018.jpg"),
  "019": require("assets/images/avatar/avatar_019.jpg"),
  "020": require("assets/images/avatar/avatar_020.jpg"),
  "021": require("assets/images/avatar/avatar_021.jpg"),
  "022": require("assets/images/avatar/avatar_022.jpg"),
  "023": require("assets/images/avatar/avatar_023.jpg"),
  "024": require("assets/images/avatar/avatar_024.jpg"),
  "025": require("assets/images/avatar/avatar_025.jpg"),
}

export const PlayerAvatar = (props: PlayerAvatarProps ) => {
  const [ player, setPlayer ] = usePlayer(props.index)
  const [ dialogOpen, setDialogOpen ] = useState(false)

  const avatar2source = (avatar:string) => Object.values(avatars)[Object.keys(avatars).findIndex((value)=>value===avatar)]

  return (
    <>
      {
        props.editable && (
        <Dialog
          isVisible={dialogOpen}
          overlayStyle={{
            backgroundColor: "white",
            borderRadius: 16,
          }}
          onBackdropPress={() => setDialogOpen(false)}
        >
          <Dialog.Title title="あなたのアバターを選んでね"/>
          <View
            style={{
              flexDirection: "column",
              gap: 8,
            }}
          >
            {[0,1,2,3,4,5].map((y) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 8,
                }}
                key={y}
              >
                {[0, 1, 2, 3].map((x) => (
                  <Avatar
                    key={x}
                    size={64}
                    rounded
                    source={avatar2source(String(y*3+x+1).padStart(3, "0"))}
                    onPress={() => {
                      setPlayer(prev => ({
                        ...prev,
                        avatar: String(y*3+x+1).padStart(3, "0")
                      }))
                      setDialogOpen(false)
                    }}
                    {...props}
                  />
                ))}
              </View>
            ))}
          </View>
        </Dialog>
        )
      }

      <TouchableOpacity
        onPress={() => {
          setDialogOpen(prev=>!prev)
        }}
        activeOpacity={props.editable ? 0.6 : 1}
      >
        <Avatar
          size={64}
          rounded
          source={avatar2source(player.avatar)}
          {...props}
        />
      </TouchableOpacity>
    </>
  )
}