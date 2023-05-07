import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../../data/theme";
import { DrawerCustomItem } from "./DrawerCustomItem";

import vaccineIcon from "../../assets/images/vaccine-icon.png";
import calendarIcon from "../../assets/images/calendar-icon.png";
import logoutIcon from "../../assets/images/logout-icon.png";

export function DrawerContent(props: any) {
  const goToMyVaccines = () => {
    props.navigation.navigate("Minhas vacinas");
  };

  const goToNextVaccines = () => {
    props.navigation.navigate("Próximas vacinas");
  };

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
      <DrawerCustomItem
        label="Minhas vacinas"
        onPress={goToMyVaccines}
        icon={vaccineIcon}
      />
      <DrawerCustomItem
        label="Próximas vacinas"
        onPress={goToNextVaccines}
        icon={calendarIcon}
      />
      <DrawerCustomItem label="Sair" onPress={handleLogout} icon={logoutIcon} />
    </DrawerContentScrollView>
  );
}
