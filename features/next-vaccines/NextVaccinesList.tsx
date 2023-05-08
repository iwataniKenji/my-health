import { View } from "react-native";
import { NextVaccinesCard } from "./NextVaccinesCard";
import { vaccinesMocked } from "../../data/persistence";

export function NextVaccinesList() {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        gap: 15,
        width: "100%",
        height: "70%",
      }}
    >
      {vaccinesMocked.map((item) => (
        <NextVaccinesCard
          key={item.id}
          title={item.title}
          nextDose={item.nextDose}
        />
      ))}
    </View>
  );
}
