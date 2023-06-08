import { View, FlatList, Text } from "react-native";
import { MyVaccineCard } from "./MyVaccineCard";
import { Vaccine } from "../../types/Vaccine";
import { useMemo } from "react";
import { colors } from "../../data/theme";
import useVaccineList from "../../hooks/useVaccineList";

type Props = {
  stackProps: any;
  search: string;
};

export function MyVaccinesGrid({ stackProps, search }: Props) {
  const { vaccines } = useVaccineList();

  const filteredVaccines = useMemo(() => {
    return vaccines.filter((vaccine: Vaccine) =>
      vaccine.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [vaccines, search]);

  return (
    <View style={{ height: "70%" }}>
      {filteredVaccines.length > 0 ? (
        <FlatList
          data={filteredVaccines}
          renderItem={({ item }) => (
            <MyVaccineCard
              id={item.id}
              title={item.title}
              doses={item.doses}
              date={item.date}
              nextDose={item.nextDose}
              stackProps={stackProps}
              imageUrl={item.imageUrl}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
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
          Nenhuma vacina encontrada
        </Text>
      )}
    </View>
  );
}
