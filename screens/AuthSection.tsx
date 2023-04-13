import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ButtonSection } from "../components/ButtonSection";
import { InputSection } from "../components/InputSection";

export function AuthSection() {
  return (
    <View style={styles.screen}>
      <Text style={styles.appTitle}>MyHealth</Text>
      <Text style={styles.appDescription}>
        Controle as suas vacinas e fique seguro
      </Text>
      <InputSection />
      <ButtonSection />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    gap: 50,
    backgroundColor: "#e5e5e5",
    color: "rgba(65, 158, 215, 1)",
  },

  appTitle: {
    fontSize: 48,
    marginTop: 40,
    fontFamily: "averiaLibre-regular",
    color: "rgba(65, 158, 215, 1)",
    textDecorationLine: "underline",
  },

  appDescription: {
    fontSize: 28,
    marginTop: 20,
    textAlign: "center",
    fontFamily: "averiaLibre-regular",
    color: "rgba(65, 158, 215, 1)",
  },
});
