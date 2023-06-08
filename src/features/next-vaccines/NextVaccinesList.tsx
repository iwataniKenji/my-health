import { FlatList, View, Text } from "react-native";
import { NextVaccinesCard } from "./NextVaccinesCard";
import useVaccineList from "../../hooks/useVaccineList";
import { colors } from "../../data/theme";
import { useMemo } from "react";

export function NextVaccinesList() {
  const { vaccines } = useVaccineList();

  const filteredVaccines = useMemo(() => {
    return vaccines.filter(({ nextDose }) => {
      if (!nextDose) return false;

      const today = new Date();
      const nextDoseDay = new Date(nextDose);

      return nextDoseDay >= today;
    });
  }, [vaccines]);

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
      {filteredVaccines.length > 0 ? (
        <FlatList
          data={filteredVaccines}
          renderItem={({ item }) => (
            <NextVaccinesCard
              key={item.id}
              title={item.title}
              nextDose={item.nextDose}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text
          style={{
            marginTop: 40,
            fontSize: 24,
            fontFamily: "averiaLibre-regular",
            color: colors.primaryDark,
            textAlign: "center",
          }}
        >
          Não há vacinas marcadas para datas futuras
        </Text>
      )}
    </View>
  );
}
