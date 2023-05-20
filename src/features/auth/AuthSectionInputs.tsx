import { View, Text } from "react-native";
import { colors } from "../../data/theme";
import { AuthCustomInput } from "./AuthCustomInput";

type Props = {
  email: string;
  onChangeEmail: (email: string) => void;
  password: string;
  onChangePassword: (password: string) => void;
  showErrorMessage: boolean;
};

export function AuthSectionInputs({
  email,
  onChangeEmail,
  password,
  onChangePassword,
  showErrorMessage,
}: Props) {
  return (
    <>
      <View>
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
      </View>
      <View>
        {showErrorMessage ? (
          <Text
            style={{
              marginTop: -60,
              marginLeft: -20,
              fontFamily: "averiaLibre-regular",
              color: colors.error,
            }}
          >
            E-mail e/ou senha inválidos.
          </Text>
        ) : (
          <View style={{ marginTop: -60 }} />
        )}
      </View>
    </>
  );
}
