import { Image, Text, TouchableOpacity } from "react-native";
import { colors } from "../../data/theme";
import { dosesEnumToString } from "../../utils/dosesEnumToString";
import { Doses } from "../../enums/Doses";

// TODO -> corrigir passagem de imagens
const imageEx = require("../../../assets/images/vac-example.jpeg");

type Props = {
  id: string;
  title: string;
  doses: Doses;
  date?: Date;
  stackProps: any;
  nextDose?: Date;
  image?: string;
};

export function MyVaccineCard({
  id,
  title,
  doses,
  date,
  stackProps,
  nextDose,
  image,
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
      image,
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
      <Image
        source={imageEx}
        resizeMode="contain"
        style={{
          maxHeight: 70,
          margin: 0,
          padding: 0,
        }}
      />

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
