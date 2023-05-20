import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../data/theme";
import { AntDesign as BackIcon } from "react-native-vector-icons";
import { MaterialIcons as MenuIcon } from "react-native-vector-icons";

export function TopToolbar(props: any) {
  const goBack = () => {
    props.navigation.goBack();
  };

  const openMenu = () => {
    props.navigation.openDrawer();
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 50,
        paddingBottom: 10,
        marginLeft: 5,
        gap: 10,
        backgroundColor: colors.bgMain,
      }}
    >
      {props.goBackButton ? (
        <TouchableOpacity onPress={goBack}>
          <BackIcon name="arrowleft" size={40} color={colors.bgDark} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={openMenu}>
          <MenuIcon name="menu" size={35} color={colors.bgDark} />
        </TouchableOpacity>
      )}
      <Text
        style={{
          fontSize: 32,
          color: colors.primaryMain,
          fontFamily: "averiaLibre-regular",
        }}
      >
        {props.title}
      </Text>
    </View>
  );
}
