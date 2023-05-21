import { Searchbar } from "./Searchbar";
import { MyVaccinesGrid } from "./MyVaccinesGrid";
import { MainScreenContent } from "../../components/MainScreenContent";
import { CustomButton } from "../../components/CustomButton";
import { colors } from "../../data/theme";
import { useState } from "react";

export function MyVaccinesSection(props: any) {
  const [search, onSearch] = useState("");

  const handleAddNewVaccine = () => {
    props.navigation.navigate("Criar vacina");
  };

  return (
    <MainScreenContent drawerProps={{ ...props, title: "Minhas vacinas" }}>
      <Searchbar search={search} onSearch={onSearch} />
      <MyVaccinesGrid stackProps={props} search={search} />
      <CustomButton color={colors.success} handleClick={handleAddNewVaccine}>
        Nova vacina
      </CustomButton>
    </MainScreenContent>
  );
}
