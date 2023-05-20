import { useState } from "react";
import { View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { colors } from "../../data/theme";
import { CustomModal } from "../../components/CustomModal";
import { DeleteButton } from "./DeleteButton";

type Props = {
  stackProps: any;
  handleCreateUpdateVaccine: (isEditMode: boolean) => void;
};

export function CreateNewVaccineButtons({
  stackProps,
  handleCreateUpdateVaccine,
}: Props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const isEditMode = stackProps.route.params?.id ? true : false;

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
      <CustomButton
        color={colors.success}
        handleClick={() => handleCreateUpdateVaccine(isEditMode)}
      >
        {isEditMode ? "Salvar alterações" : "Cadastrar"}
      </CustomButton>
      {isEditMode && (
        <View>
          <DeleteButton handleClick={handleOpenModal}>Excluir</DeleteButton>
          <CustomModal
            modalIsVisible={modalIsVisible}
            setModalIsVisible={setModalIsVisible}
            stackProps={stackProps}
          />
        </View>
      )}
    </View>
  );
}
