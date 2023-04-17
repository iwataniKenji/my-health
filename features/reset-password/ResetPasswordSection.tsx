import { useState } from "react";
import { CustomInput } from "../../components/CustomInput";
import { MainScreenContent } from "../../components/MainScreenContent";
import { View } from "react-native";

export function ResetPasswordSection(props: any) {
  const [email, onChangeEmail] = useState("");

  return (
    <MainScreenContent toolbarTitle="My Health" {...props}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          paddingHorizontal: 20,
          height: 400,
        }}
      >
        <CustomInput
          label="E-mail"
          value={email}
          onChangeText={onChangeEmail}
        />
      </View>
    </MainScreenContent>
  );
}
