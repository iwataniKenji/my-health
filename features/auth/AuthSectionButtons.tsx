import { Alert, View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { colors } from "../../data/theme";

export function AuthSectionButtons(props: any) {
  const handleLogin = () => {
    props.navigation.navigate("Drawer");
  };

  const handleCreate = () => {
    props.navigation.navigate("Cadastro");
  };

  const handleChangePassword = () => {
    props.navigation.navigate("Password");
  };

  const sectionButtons = [
    {
      text: "Entrar",
      color: colors.success,
      handleClick: handleLogin,
    },
    {
      text: "Criar minha conta",
      color: colors.primaryMain,
      handleClick: handleCreate,
    },
    {
      text: "Esqueci minha senha",
      color: colors.grayMain,
      handleClick: handleChangePassword,
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
