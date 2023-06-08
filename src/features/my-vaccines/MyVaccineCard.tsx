import { Image, Text, TouchableOpacity } from "react-native";
import { colors } from "../../data/theme";
import { dosesEnumToString } from "../../utils/dosesEnumToString";
import { Doses } from "../../enums/Doses";

type Props = {
  id: string;
  title: string;
  doses: Doses;
  date?: Date;
  stackProps: any;
  nextDose?: Date;
  imageUrl?: string;
};

// TODO -> integrar imagens
export function MyVaccineCard({
  id,
  title,
  doses,
  date,
  stackProps,
  nextDose,
  imageUrl,
}: Props) {
  const nextDoseText = nextDose
    ? `Próxima dose em: ${nextDose.toLocaleDateString()}`
    : "Não há próxima dose";

  const handleEditVaccine = () => {
    stackProps.navigation.navigate("Criar vacina", {
      id,
      title,
      doses,
      date,
      nextDose,
      imageUrl,
    });
  };

  return (
    <TouchableOpacity
      style={{
        margin: 5,
        display: "flex",
        alignItems: "center",
        gap: 2,
        paddingTop: 10,
        borderRadius: 10,
        backgroundColor: "white",
        width: 170,
        height: 160,
      }}
      onPress={handleEditVaccine}
    >
      <Text
        style={{
          fontSize: 22,
          fontFamily: "averiaLibre-regular",
          color: colors.primaryDark,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 12,
          paddingVertical: 2,
          paddingHorizontal: 10,
          fontFamily: "averiaLibre-regular",
          backgroundColor: colors.primaryDark,
          color: colors.white,
        }}
      >
        {dosesEnumToString(doses)}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: colors.grayDark,
        }}
      >
        {date ? date.toLocaleDateString() : "Não há data"}
      </Text>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={{ height: 70, width: 70 }} />
      ) : null}

      <Text
        style={{
          textAlign: "right",
          fontSize: 10,
          color: colors.error,
        }}
      >
        {nextDoseText}
      </Text>
    </TouchableOpacity>
  );
}
