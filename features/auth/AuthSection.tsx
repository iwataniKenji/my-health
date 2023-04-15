import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AuthSectionButtons } from "./AuthSectionButtons";
import { AuthSectionInputs } from "./AuthSectionInputs";
import { colors } from "../../data/theme";

export function AuthSection(props: any) {
  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 20,
        gap: 50,
        backgroundColor: "#e5e5e5",
      }}
    >
      <Text
        style={{
          fontSize: 48,
          marginTop: 40,
          fontFamily: "averiaLibre-regular",
          color: colors.primaryMain,
          textDecorationLine: "underline",
        }}
      >
        MyHealth
      </Text>
      <Text
        style={{
          fontSize: 28,
          marginTop: 20,
          textAlign: "center",
          fontFamily: "averiaLibre-regular",
          color: colors.primaryMain,
        }}
      >
        Controle as suas vacinas e fique seguro
      </Text>
      <AuthSectionInputs />
      <AuthSectionButtons {...props} />
      <StatusBar style="auto" />
    </View>
  );
}
