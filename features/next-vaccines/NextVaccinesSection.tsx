import { NextVaccinesList } from "./NextVaccinesList";
import { MainScreenContent } from "../../components/MainScreenContent";
import { CustomButton } from "../../components/CustomButton";
import { colors } from "../../data/theme";
import { Doses } from '../../enums/Doses';

export function NextVaccinesSection(props: any) {
  const handleAddNewVaccine = () => {
    props.navigation.navigate("Criar vacina", {
      id: "",
      title: "",
      doses: Doses.SINGLE_DOSE,
      date: "",
      nextDose: "",
      image: "",
    });
  };

  return (
    <MainScreenContent drawerProps={{ ...props, title: "Próximas vacinas" }}>
      <NextVaccinesList />
      <CustomButton color={colors.success} handleClick={handleAddNewVaccine}>
        Nova vacina
      </CustomButton>
    </MainScreenContent>
  );
}
