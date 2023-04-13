import { StyleSheet, View } from "react-native";
import { NextVaccinesCard } from "./NextVaccinesCard";

const data = [
  {
    title: "BCG",
    date: "20/09/2022",
  },
  {
    title: "DTpa",
    date: "20/09/2024",
  },
  {
    title: "Sarampo",
    date: "03/04/2026",
  },
];

export function CardsSection2() {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <NextVaccinesCard title={item.title} date={item.date} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    width: "100%",
  },
});
