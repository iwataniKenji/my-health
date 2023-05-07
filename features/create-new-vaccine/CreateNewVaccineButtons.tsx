import { useState } from "react";
import { View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { colors } from "../../data/theme";
import { CustomModal } from "../../components/CustomModal";
import { DeleteButton } from "./DeleteButton";

export function CreateNewVaccineButtons(props: any) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const isEditMode = true;

  const handleSaveVaccine = () => {
    props.navigation.pop();
  };

  const handleOpenModal = () => {
    setModalIsVisible(true);
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 80,
      }}
    >
      <CustomButton color={colors.success} handleClick={handleSaveVaccine}>
        {isEditMode ? "Salvar alterações" : "Cadastrar"}
      </CustomButton>
      {isEditMode && (
        <View>
          <DeleteButton handleClick={handleOpenModal}>Excluir</DeleteButton>
          <CustomModal
            modalIsVisible={modalIsVisible}
            setModalIsVisible={setModalIsVisible}
            stackProps={props}
          />
        </View>
      )}
    </View>
  );
}
