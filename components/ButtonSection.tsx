import { Alert, View } from "react-native";
import { CustomButton } from "./CustomButton";

const sectionButtons = [
  {
    text: "Entrar",
    color: "rgba(55, 189, 109, 1)",
    handleClick: () => {
      Alert.alert("Login", "Login realizado com sucesso!");
    },
  },
  {
    text: "Criar minha conta",
    color: "rgba(65, 158, 215, 1)",
    handleClick: () => {
      Alert.alert("Criar conta", "Conta criada com sucesso!");
    },
  },
  {
    text: "Esqueci minha senha",
    color: "rgba(181, 199, 209, 1)",
    handleClick: () => {
      Alert.alert("Esqueci minha senha", "Senha recuperada com sucesso!");
    },
  },
];

export function ButtonSection() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 40,
        marginTop: 20,
      }}
    >
      {sectionButtons.map((button) => (
        <CustomButton color={button.color} handleClick={button.handleClick}>
          {button.text}
        </CustomButton>
      ))}
    </View>
  );
}
