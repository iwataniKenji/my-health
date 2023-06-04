import { View, FlatList } from "react-native";
import { MyVaccineCard } from "./MyVaccineCard";
import { Vaccine } from "../../types/Vaccine";
import useVaccineList from "../../hooks/useVaccineList";

type Props = {
  stackProps: any;
  search: string;
};

export function MyVaccinesGrid({ stackProps, search }: Props) {
  const { vaccines } = useVaccineList();

  return (
    <View style={{ height: "70%" }}>
      <FlatList
        data={vaccines.filter((vaccine: Vaccine) =>
          vaccine.title.toLowerCase().includes(search.toLowerCase())
        )}
        renderItem={({ item }) => (
          <MyVaccineCard
            id={item.id}
            title={item.title}
            doses={item.doses}
            date={item.date}
            nextDose={item.nextDose}
            stackProps={stackProps}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}
