import { useEffect, useState } from "react";
import { CustomInput } from "../../components/CustomInput";
import { MainScreenContent } from "../../components/MainScreenContent";
import { View } from "react-native";
import { CreateNewVaccineButtons } from "./CreateNewVaccineButtons";

export function CreateNewVaccineSection(props: any) {
  const [day, onChangeDay] = useState("");
  const [name, onChangeName] = useState("");
  const [nextDay, onChangeNextDay] = useState("");

  useEffect(() => {
    if (props.route.params) {
      const { title, date, nextDose } = props.route.params;

      onChangeDay(date ? date.toLocaleDateString() : "");
      onChangeName(title ? title : "");
      onChangeNextDay(nextDose ? nextDose.toLocaleDateString() : "");
    }
  }, []);

  return (
    <MainScreenContent
      drawerProps={{ ...props, goBackButton: true, title: "Minhas vacinas" }}
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

      <CreateNewVaccineButtons {...props} />
    </MainScreenContent>
  );
}
