import { View, Modal, Text, Pressable } from "react-native";
import { colors } from "../data/theme";
import { useRemoveVaccine } from "../hooks/useRemoveVaccine";
import { useSelector } from "react-redux";

type Props = {
  modalIsVisible: boolean;
  setModalIsVisible: (value: boolean) => void;
  stackProps: any;
};

export function CustomModal({
  modalIsVisible,
  setModalIsVisible,
  stackProps,
}: Props) {
  const removeVaccine = useRemoveVaccine();

  const userId = useSelector((state: any) => state.auth.id);

  const handleModalConfirm = () => {
    setModalIsVisible(false);

    removeVaccine(
      userId,
      stackProps.route.params.id,
      stackProps.route.params.imageUrl
    );

    stackProps.navigation.pop();
  };

  const handleModalClose = () => {
    setModalIsVisible(false);
  };

  return (
    <Modal visible={modalIsVisible} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "75%",
            backgroundColor: colors.white,
            borderColor: colors.bgMain,
            borderWidth: 2,
            height: 150,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "averiaLibre-regular",
              color: colors.error,
              textAlign: "center",
            }}
          >
            Tem certeza que deseja remover essa vacina?
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Pressable
              style={{
                width: "48%",
                backgroundColor: colors.error,
                paddingVertical: 10,
              }}
              onPress={handleModalConfirm}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  fontFamily: "averiaLibre-regular",
                  color: colors.white,
                }}
              >
                SIM
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: "48%",
                backgroundColor: colors.primaryMain,
                paddingVertical: 10,
              }}
              onPress={handleModalClose}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  fontFamily: "averiaLibre-regular",
                  color: colors.white,
                }}
              >
                CANCELAR
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
