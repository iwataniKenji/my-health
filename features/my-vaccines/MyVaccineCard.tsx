import { Text, View } from "react-native";
import { colors } from "../../data/theme";

type Props = {
  title: string;
  about: string;
  date: string;
  nextDose?: string;
};

export function MyVaccineCard({ title, about, date, nextDose }: Props) {
  const nextDoseText = nextDose
    ? `Próxima dose em: ${nextDose}`
    : "Não há próxima dose";

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
        width: "45%",
      }}
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
        {about}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: colors.grayDark,
        }}
      >
        {date}
      </Text>
      <Text
        style={{
          fontSize: 10,
          color: colors.error,
        }}
      >
        {nextDoseText}
      </Text>
    </View>
  );
}
