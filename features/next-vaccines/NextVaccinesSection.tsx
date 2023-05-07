import { NextVaccinesList } from "./NextVaccinesList";
import { MainScreenContent } from "../../components/MainScreenContent";

export function NextVaccinesSection(props: any) {
  return (
    <MainScreenContent
      drawerProps={{ ...props, goBackButton: false, title: "Próximas vacinas" }}
    >
      <NextVaccinesList />
    </MainScreenContent>
  );
}
