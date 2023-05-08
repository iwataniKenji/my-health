import { useEffect, useState } from "react";
import { CustomInput } from "../../components/CustomInput";
import { MainScreenContent } from "../../components/MainScreenContent";
import { View } from "react-native";
import { CreateNewVaccineButtons } from "./CreateNewVaccineButtons";
import { Doses } from "../../enums/Doses";
import { CustomRadioGroup } from "../../components/CustomRadioGroup";
import { dosesValues } from "../../data/dosesValues";
import { vaccinesMocked } from "../../data/persistence";
import { CustomDatePicker } from "../../components/CustomDatePicker";

export function CreateNewVaccineSection(props: any) {
  const [date, setDate] = useState(undefined);
  const [title, setTitle] = useState("");
  const [doses, setDoses] = useState(Doses.SINGLE_DOSE);
  const [nextDose, setNextDose] = useState(undefined);
  const [image, setImage] = useState(undefined);

  useEffect(() => {
    if (props.route.params) {
      const { title, date, doses, nextDose, image } = props.route.params;

      setDate(date ? date : undefined);
      setTitle(title ? title : "");
      setDoses(doses ? doses : Doses.SINGLE_DOSE);
      setNextDose(nextDose ? nextDose : undefined);
      setImage(image ? image : undefined);
    }
  }, []);

  const handleCreateUpdateVaccine = (isEditMode: boolean) => {
    if (isEditMode) {
      const foundVaccine = vaccinesMocked.find(
        (v) => v.id === props.route.params.id
      );

      if (foundVaccine) {
        foundVaccine.title = title;
        foundVaccine.date = date;
        foundVaccine.doses = doses;
        foundVaccine.nextDose = nextDose;
        foundVaccine.image = image;
      }

      vaccinesMocked.map((v) => {
        if (v.id === props.route.params.id) {
          return foundVaccine;
        }

        return v;
      });

      console.log("vaccinesMocked", vaccinesMocked);
    } else {
      vaccinesMocked.push({
        id: (vaccinesMocked.length + 1).toString(),
        title,
        date,
        doses,
        nextDose,
        image,
      });
    }

    props.navigation.pop();
  };

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
        <CustomDatePicker
          label="Data de vacinação"
          value={date}
          onChange={setDate as any}
        />
        <CustomInput label="Vacina" value={title} onChangeText={setTitle} />
        <CustomRadioGroup
          value={doses}
          setValue={setDoses}
          options={dosesValues}
        />
        <CustomDatePicker
          label="Próxima vacinação"
          value={nextDose}
          onChange={setNextDose as any}
        />
      </View>

      <CreateNewVaccineButtons
        stackProps={props}
        handleCreateUpdateVaccine={handleCreateUpdateVaccine}
      />
    </MainScreenContent>
  );
}
