import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../data/theme";

type Props = {
  title: string;
  drawerProps: any;
};

export function TopToolbar({ title, drawerProps }: Props) {
  const openMenu = () => {
    drawerProps.navigation.openDrawer();
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingTop: 50,
        paddingBottom: 10,
        gap: 10,
        backgroundColor: colors.bgMain,
      }}
    >
      <TouchableOpacity onPress={openMenu}>
        <Text
          style={{
            fontSize: 46,
            color: colors.bgDark,
          }}
        >
          ☰
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 32,
          color: colors.primaryMain,
          fontFamily: "averiaLibre-regular",
        }}
      >
        {title}
      </Text>
    </View>
  );
}
