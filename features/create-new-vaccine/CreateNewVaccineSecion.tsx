import { useState } from "react";
import { CustomInput } from "../../components/CustomInput";
import { MainScreenContent } from "../../components/MainScreenContent";
import { View } from "react-native";

export function CreateNewVaccineSection(props: any) {
  const [day, onChangeDay] = useState("");
  const [name, onChangeName] = useState("");
  const [nextDay, onChangeNextDay] = useState("");

  return (
    <MainScreenContent toolbarTitle="Minhas vacinas" {...props}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          paddingHorizontal: 20,
          height: 400,
        }}
      >
        <CustomInput
          label="Data de vacinação"
          value={day}
          onChangeText={onChangeDay}
        />
        <CustomInput label="Vacina" value={name} onChangeText={onChangeName} />
        <CustomInput
          label="Próxima vacinação"
          value={nextDay}
          onChangeText={onChangeNextDay}
        />
      </View>
    </MainScreenContent>
  );
}
