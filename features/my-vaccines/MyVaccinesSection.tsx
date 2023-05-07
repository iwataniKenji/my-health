import { Searchbar } from "./Searchbar";
import { MyVaccinesGrid } from "./MyVaccinesGrid";
import { MainScreenContent } from "../../components/MainScreenContent";
import { CustomButton } from "../../components/CustomButton";
import { colors } from "../../data/theme";

export function MyVaccinesSection(props: any) {
  const handleAddNewVaccine = () => {
    props.navigation.navigate("Criar vacina");
  };

  return (
    <MainScreenContent drawerProps={{ ...props, title: "Minhas vacinas" }}>
      <Searchbar />
      <MyVaccinesGrid stackProps={props} />
      <CustomButton color={colors.success} handleClick={handleAddNewVaccine}>
        Nova vacina
      </CustomButton>
    </MainScreenContent>
  );
}
