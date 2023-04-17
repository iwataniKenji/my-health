import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { colors } from "../../data/theme";

export function DrawerContent(props: any) {
  const handleLogout = () => {
    props.navigation.navigate("Auth");
  };

  return (
    <DrawerContentScrollView style={{ backgroundColor: colors.bgDark }}>
      <View
        style={{
          paddingVertical: 20,
          marginHorizontal: 10,
          borderBottomWidth: 2,
          borderBottomColor: colors.primaryMain,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            alignSelf: "center",
            fontFamily: "averiaLibre-regular",
            color: colors.primaryMain,
          }}
        >
          Olá, Jurandir
        </Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={handleLogout} />
    </DrawerContentScrollView>
  );
}
