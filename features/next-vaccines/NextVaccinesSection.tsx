import { NextVaccinesList } from "./NextVaccinesList";
import { MainScreenContent } from "../../components/MainScreenContent";

export function NextVaccinesSection(props: any) {
  return (
    <MainScreenContent toolbarTitle="Próximas vacinas" {...props}>
      <NextVaccinesList />
    </MainScreenContent>
  );
}
