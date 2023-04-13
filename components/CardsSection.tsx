import { StyleSheet, View } from "react-native";
import { VaccineCard } from "./VaccineCard";

export function CardsSection() {
  return (
    <View style={styles.grid}>
      <VaccineCard title="BCG" about="Dose única" date="11/06/2022" />
      <VaccineCard
        title="Febre amarela"
        about="1a. dose"
        date="11/10/2022"
        nextDose="11/10/2023"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
