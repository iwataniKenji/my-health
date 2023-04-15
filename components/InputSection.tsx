import { useState } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { CustomInput } from "./CustomInput";

export function InputSection() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isValid, setIsValid] = useState(false); // TODO -> substituir por validação
  const [isLoading, setIsLoading] = useState(false); // TODO -> substituir loading

  return (
    <View>
      {/* LOADING */}
      <ActivityIndicator animating={isLoading} color={MD2Colors.red800} />

      <CustomInput label="E-mail" value={email} onChange={onChangeEmail} />
      <CustomInput label="Senha" value={password} onChange={onChangePassword} />

      {!isValid && (
        <Text
          style={{
            marginLeft: 60,
            fontFamily: "averiaLibre-regular",
            color: "rgba(253, 121, 121, 1)",
          }}
        >
          E-mail e/ou senha inválidos.
        </Text>
      )}
    </View>
  );
}
