import { Text, View } from "react-native";

type Props = {
  title: string;
  about: string;
  date: string;
  nextDose?: string;
};

export function VaccineCard({ title, about, date, nextDose }: Props) {
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
          color: "rgba(63, 146, 197, 1)",
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
          backgroundColor: "rgba(63, 146, 197, 1)",
          color: "rgba(255, 255, 255, 1)",
        }}
      >
        {about}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: "rgba(139, 139, 139, 1)",
        }}
      >
        {date}
      </Text>
      <Text
        style={{
          fontSize: 10,
          color: "rgba(253, 121, 121, 1)",
        }}
      >
        {nextDoseText}
      </Text>
    </View>
  );
}
