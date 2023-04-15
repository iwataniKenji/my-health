import { Searchbar } from "./Searchbar";
import { MyVaccinesGrid } from "./MyVaccinesGrid";
import { MainScreenContent } from "../../components/MainScreenContent";

export function MyVaccinesSection(props: any) {
  return (
    <MainScreenContent toolbarTitle="Minhas vacinas" {...props}>
      <Searchbar />
      <MyVaccinesGrid />
    </MainScreenContent>
  );
}
