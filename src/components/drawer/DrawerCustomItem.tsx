import { DrawerItem } from "@react-navigation/drawer";
import { Image } from "react-native";
import { colors } from "../../data/theme";

type Props = {
  label: string;
  onPress: () => void;
  icon: any;
};

export function DrawerCustomItem({ label, onPress, icon }: Props) {
  return (
    <DrawerItem
      style={{
        width: "100%",
        marginBottom: -5,
      }}
      label={label}
      onPress={onPress}
      icon={() => (
        <Image
          source={icon}
          style={{
            width: 30,
            height: 30,
          }}
        />
      )}
      labelStyle={{
        fontFamily: "averiaLibre-regular",
        fontSize: 24,
        color: colors.primaryMain,
        marginLeft: -25,
      }}
    />
  );
}
