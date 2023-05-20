import { useState } from "react";
import { MainScreenContent } from "../../components/MainScreenContent";
import { View } from "react-native";
import { AuthCustomInput } from "../auth/AuthCustomInput";
import { CustomButton } from "../../components/CustomButton";
import { colors } from "../../data/theme";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";

export function ResetPasswordSection(props: any) {
  const [email, onChangeEmail] = useState("");

  // TODO -> adicionar isLoading state
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("E-mail de recuperação de senha enviado com sucesso!");

        props.navigation.goBack();
      })
      .catch((error) => {
        alert("Erro ao enviar e-mail de recuperação de senha");

        console.log("ERROR:", JSON.stringify(error));
      });
  };

  return (
    <MainScreenContent
      drawerProps={{ ...props, goBackButton: true, title: "My Health" }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          paddingHorizontal: 20,
          height: 400,
        }}
      >
        <AuthCustomInput
          label="E-mail"
          value={email}
          onChangeText={onChangeEmail}
        />
      </View>
      <CustomButton color={colors.success} handleClick={handleResetPassword}>
        Recuperar senha
      </CustomButton>
    </MainScreenContent>
  );
}
