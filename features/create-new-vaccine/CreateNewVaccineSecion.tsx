import { useState } from "react";
import { CustomInput } from "../../components/CustomInput";
import { MainScreenContent } from "../../components/MainScreenContent";
import { View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { colors } from "../../data/theme";
import { CustomModal } from "../../components/CustomModal";

export function CreateNewVaccineSection(props: any) {
  const [day, onChangeDay] = useState("");
  const [name, onChangeName] = useState("");
  const [nextDay, onChangeNextDay] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleOpenModal = () => {
    setModalIsVisible(true);
  };

  return (
    <MainScreenContent toolbarTitle="Minhas vacinas" drawerProps={props}>
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

      <CustomButton color={colors.error} handleClick={handleOpenModal}>
        Excluir
      </CustomButton>
      <CustomModal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
        stackProps={props}
      />
    </MainScreenContent>
  );
}
