import { useState } from "react";
import { CustomInput } from "../../components/CustomInput";
import { MainScreenContent } from "../../components/MainScreenContent";
import { View } from "react-native";

export function SignupSection(props: any) {
  const [name, onChangeName] = useState("");
  const [date, onChangeDate] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [confirmation, onChangeConfirmation] = useState("");

  return (
    <MainScreenContent
      drawerProps={{ ...props, goBackButton: false, title: "My Health" }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          paddingHorizontal: 20,
          height: 400,
        }}
      >
        <CustomInput
          label="Nome completo"
          value={name}
          onChangeText={onChangeName}
        />
        <CustomInput
          label="Data de nascimento"
          value={date}
          onChangeText={onChangeDate}
        />
        <CustomInput
          label="E-mail"
          value={email}
          onChangeText={onChangeEmail}
        />
        <CustomInput
          label="Senha"
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry
        />
        <CustomInput
          label="Repetir senha"
          value={confirmation}
          onChangeText={onChangeConfirmation}
          secureTextEntry
        />
      </View>
    </MainScreenContent>
  );
}
