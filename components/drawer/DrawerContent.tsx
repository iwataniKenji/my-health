import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text } from "react-native";

export function DrawerContent(props: any) {
  const handleLogout = () => {
    props.navigation.navigate("Auth");
  };

  return (
    <DrawerContentScrollView>
      <View style={{ paddingVertical: 20, marginRight: 10 }}>
        <Text style={{ fontSize: 24, alignSelf: "center" }}>Olá, Jurandir</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={handleLogout} />
    </DrawerContentScrollView>
  );
}
