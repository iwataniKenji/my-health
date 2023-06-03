import { useEffect, useState } from "react";
import { CustomInput } from "../../components/CustomInput";
import { MainScreenContent } from "../../components/MainScreenContent";
import { View, Text } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { colors } from "../../data/theme";
import { Gender } from "../../enums/Gender";
import { CustomRadioGroup } from "../../components/CustomRadioGroup";
import { genderValues } from "../../data/genderValues";
import { CustomDatePicker } from "../../components/CustomDatePicker";
import useCreateUser from "../../hooks/useCreateUser";

export function SignupSection(props: any) {
  const createUser = useCreateUser();

  const [name, onChangeName] = useState("");
  const [gender, setGender] = useState(Gender.MALE);
  const [dateOfBirth, onChangeDateOfBirth] = useState(undefined);
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [confirmation, onChangeConfirmation] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSignup = () => {
    if (name === "" || email === "") {
      return alert("Campos de nome e e-mail são obrigatórios");
    }

    if (password !== confirmation || password === "") {
      return setShowErrorMessage(true);
    }

    createUser(
      {
        name,
        gender,
        dateOfBirth,
        email,
        password,
      },
      () => props.navigation.goBack()
    );
  };

  useEffect(() => {
    setShowErrorMessage(false);
  }, [password, confirmation]);

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
        <CustomDatePicker
          label="Data de nascimento"
          value={dateOfBirth}
          onChange={onChangeDateOfBirth as any}
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

      <View>
        {showErrorMessage ? (
          <Text
            style={{
              marginTop: -70,
              marginLeft: 100,
              fontFamily: "averiaLibre-regular",
              color: colors.error,
            }}
          >
            Senha não confere!
          </Text>
        ) : (
          <View style={{ marginTop: -70 }} />
        )}
      </View>

      <View style={{ marginTop: 70 }}>
        <CustomButton color={colors.success} handleClick={handleSignup}>
          Cadastrar
        </CustomButton>
      </View>
    </MainScreenContent>
  );
}
