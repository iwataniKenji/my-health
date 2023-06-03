import { View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { colors } from "../../data/theme";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../firebase/config";
import { useDispatch } from "react-redux";
import { reducerSetLogin } from "../../redux/authSlice";
import { doc, getDoc } from "firebase/firestore";

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
  const dispatch = useDispatch();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userLogged) => {
        const userRef = doc(database, "users", userLogged.user.uid);

        getDoc(userRef).then((user) => {
          dispatch(
            reducerSetLogin({
              id: user.data()?.id,
              name: user.data()?.name,
            })
          );
        });

        console.log("LOGGED:", JSON.stringify(userLogged));

        stackProps.navigation.navigate("Drawer");
      })
      .catch((error) => {
        setShowErrorMessage(true);

        console.log("ERROR:", JSON.stringify(error));
      });
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
