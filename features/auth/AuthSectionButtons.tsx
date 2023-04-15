import { Alert, View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { colors } from "../../data/theme";

export function AuthSectionButtons(props: any) {
  const sectionButtons = [
    {
      text: "Entrar",
      color: colors.success,
      handleClick: () => {
        props.navigation.navigate("Drawer");
      },
    },
    {
      text: "Criar minha conta",
      color: colors.primaryMain,
      handleClick: () => {
        Alert.alert("Criar conta", "Conta criada com sucesso!");
      },
    },
    {
      text: "Esqueci minha senha",
      color: colors.grayMain,
      handleClick: () => {
        Alert.alert("Esqueci minha senha", "Senha recuperada com sucesso!");
      },
    },
  ];

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
        <CustomButton
          key={button.text}
          color={button.color}
          handleClick={button.handleClick}
        >
          {button.text}
        </CustomButton>
      ))}
    </View>
  );
}
