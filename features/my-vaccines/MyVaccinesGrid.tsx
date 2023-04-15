import { View } from "react-native";
import { MyVaccineCard } from "./MyVaccineCard";

export function MyVaccinesGrid() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
      }}
    >
      <MyVaccineCard title="BCG" about="Dose única" date="11/06/2022" />
      <MyVaccineCard
        title="Febre amarela"
        about="1a. dose"
        date="11/10/2022"
        nextDose="11/10/2023"
      />
    </View>
  );
}
