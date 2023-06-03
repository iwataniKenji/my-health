import { View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { colors } from "../../data/theme";
import { useAuthenticate } from "../../hooks/useAuthenticate";

type Props = {
  stackProps: any;
  email: string;
  password: string;
  setShowErrorMessage: (showErrorMessage: boolean) => void;
};

export function AuthSectionButtons({
  stackProps,
  email,
  password,
  setShowErrorMessage,
}: Props) {
  const useAuth = useAuthenticate();

  const handleLogin = () => {
    useAuth(
      email,
      password,
      () => stackProps.navigation.navigate("Drawer"),
      setShowErrorMessage
    );
  };

  const handleCreate = () => {
    stackProps.navigation.navigate("Cadastro");
  };

  const handleChangePassword = () => {
    stackProps.navigation.navigate("Password");
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
        marginTop: -20,
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
