import { StyleSheet, View, Text } from "react-native";

type Props = {
  title: string;
  date: string;
};

export function NextVaccinesCard({ title, date }: Props) {
  return (
    <View style={styles.cardBackground}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBackground: {
    display: "flex",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    width: "92%",
  },

  title: {
    fontSize: 22,
    fontFamily: "averiaLibre-regular",
    color: "rgba(63, 146, 197, 1)",
  },

  date: {
    fontSize: 12,
    color: "rgba(139, 139, 139, 1)",
  },
});
