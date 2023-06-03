import { FlatList, View } from "react-native";
import { NextVaccinesCard } from "./NextVaccinesCard";
import { useEffect } from "react";
import useVaccineList from "../../hooks/useVaccineList";

export function NextVaccinesList() {
  const { listRefresh, vaccines } = useVaccineList();

  useEffect(() => {
    listRefresh();
  }, []);

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
      <FlatList
        data={vaccines.filter(({ nextDose }) => {
          const today = new Date();
          const nextDoseDay = nextDose ? new Date(nextDose) : new Date();

          return nextDoseDay >= today;
        })}
        renderItem={({ item }) => (
          <NextVaccinesCard
            key={item.id}
            title={item.title}
            nextDose={item.nextDose}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
