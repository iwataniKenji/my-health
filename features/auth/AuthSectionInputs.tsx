import { useState } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { colors } from "../../data/theme";
import { AuthCustomInput } from "./AuthCustomInput";

export function AuthSectionInputs() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View>
      {/* LOADING */}
      <ActivityIndicator animating={isLoading} color={MD2Colors.red800} />

      <AuthCustomInput
        label="E-mail"
        value={email}
        onChangeText={onChangeEmail}
      />
      <AuthCustomInput
        label="Senha"
        value={password}
        onChangeText={onChangePassword}
        secureTextEntry
      />

      {!isValid && (
        <Text
          style={{
            marginTop: -5,
            marginLeft: 67,
            fontFamily: "averiaLibre-regular",
            color: colors.error,
          }}
        >
          E-mail e/ou senha inválidos.
        </Text>
      )}
    </View>
  );
}
