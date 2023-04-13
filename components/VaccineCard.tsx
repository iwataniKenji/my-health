import { StyleSheet, Text, View } from "react-native";

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
    <View style={styles.cardBackground}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.about}>{about}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.nextDose}>{nextDoseText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBackground: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    width: "45%",
  },

  title: {
    fontSize: 22,
    fontFamily: "averiaLibre-regular",
    color: "rgba(63, 146, 197, 1)",
  },

  about: {
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontFamily: "averiaLibre-regular",
    backgroundColor: "rgba(63, 146, 197, 1)",
    color: "rgba(255, 255, 255, 1)",
  },

  date: {
    fontSize: 12,
    color: "rgba(139, 139, 139, 1)",
  },

  nextDose: {
    fontSize: 10,
    color: "rgba(253, 121, 121, 1)",
  },
});
