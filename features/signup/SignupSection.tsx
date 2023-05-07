import { useState } from "react";
import { CustomInput } from "../../components/CustomInput";
import { MainScreenContent } from "../../components/MainScreenContent";
import { View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { colors } from "../../data/theme";
import { Gender } from "../../enums/Gender";
import { CustomRadioGroup } from "../../components/CustomRadioGroup";
import { genderValues } from "../../data/genderValues";

export function SignupSection(props: any) {
  const [name, onChangeName] = useState("");
  const [gender, setGender] = useState(Gender.MALE);
  const [date, onChangeDate] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [confirmation, onChangeConfirmation] = useState("");

  const handleSignup = () => {
    props.navigation.goBack();
  };

  return (
    <MainScreenContent
      drawerProps={{ ...props, goBackButton: true, title: "Nova Conta" }}
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
        <CustomRadioGroup
          value={gender}
          setValue={setGender}
          options={genderValues}
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
      <CustomButton color={colors.success} handleClick={handleSignup}>
        Cadastrar
      </CustomButton>
    </MainScreenContent>
  );
}
