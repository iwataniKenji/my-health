import { useState } from "react";
import { CustomInput } from "../../components/CustomInput";
import { MainScreenContent } from "../../components/MainScreenContent";
import { View } from "react-native";

export function ResetPasswordSection(props: any) {
  const [email, onChangeEmail] = useState("");

  return (
    <MainScreenContent toolbarTitle="My Health" {...props}>
      <View style={{ paddingTop: 200 }}>
        <CustomInput label="E-mail" value={email} onChange={onChangeEmail} />
      </View>
    </MainScreenContent>
  );
}
