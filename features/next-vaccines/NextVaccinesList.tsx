import { View } from "react-native";
import { NextVaccinesCard } from "./NextVaccinesCard";
import { vaccinesMocked } from '../../data/persistence';

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

export function NextVaccinesList() {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        gap: 15,
        width: "100%",
      }}
    >
      {vaccinesMocked.map((item) => (
        <NextVaccinesCard title={item.title} nextDose={item.nextDose} />
      ))}
    </View>
  );
}
