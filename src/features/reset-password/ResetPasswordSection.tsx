import { useState } from "react";
import { MainScreenContent } from "../../components/MainScreenContent";
import { View } from "react-native";
import { AuthCustomInput } from "../auth/AuthCustomInput";
import { CustomButton } from "../../components/CustomButton";
import { colors } from "../../data/theme";

export function ResetPasswordSection(props: any) {
  const [email, onChangeEmail] = useState("");

  const handleResetPassword = () => {
    props.navigation.goBack();
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
