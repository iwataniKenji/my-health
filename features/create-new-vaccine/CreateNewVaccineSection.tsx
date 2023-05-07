import { useEffect, useState } from "react";
import { CustomInput } from "../../components/CustomInput";
import { MainScreenContent } from "../../components/MainScreenContent";
import { View } from "react-native";
import { CreateNewVaccineButtons } from "./CreateNewVaccineButtons";
import { Doses } from "../../enums/Doses";
import { CustomRadioGroup } from "../../components/CustomRadioGroup";
import { dosesValues } from "../../data/dosesValues";

export function CreateNewVaccineSection(props: any) {
  const [day, onChangeDay] = useState("");
  const [name, onChangeName] = useState("");
  const [doses, setDoses] = useState(Doses.SINGLE_DOSE);
  const [nextDay, onChangeNextDay] = useState("");

  useEffect(() => {
    if (props.route.params) {
      const { title, date, doses, nextDose } = props.route.params;

      onChangeDay(date ? date.toLocaleDateString() : "");
      onChangeName(title ? title : "");
      setDoses(doses ? doses : Doses.SINGLE_DOSE);
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
        <CustomRadioGroup
          value={doses}
          setValue={setDoses}
          options={dosesValues}
        />
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
