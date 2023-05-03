import { View, Text, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AuthSectionButtons } from "./AuthSectionButtons";
import { AuthSectionInputs } from "./AuthSectionInputs";
import { colors } from "../../data/theme";
import { LinearGradient } from "expo-linear-gradient";

import bg from "../../assets/images/background.jpg";

export function AuthSection(props: any) {
  return (
    <ImageBackground source={bg} resizeMode="cover" style={{ flex: 1 }}>
      <LinearGradient
        colors={[
          "rgba(84, 131, 126, 0.2)",
          "rgba(255, 255, 255, 0.62)",
          "rgba(221, 230, 229, 0.68)",
          "rgba(59, 94, 90, 0.51)",
        ]}
        style={{ flex: 1 }}
      >
        <View
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            paddingVertical: 40,
            paddingHorizontal: 20,
            gap: 50,
            backgroundColor: "rgba(221, 230, 229, 0.68)",
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
      </LinearGradient>
    </ImageBackground>
  );
}
