import { View, FlatList } from "react-native";
import { MyVaccineCard } from "./MyVaccineCard";
import { vaccinesMocked } from "../../data/persistence";

type Props = {
  stackProps: any;
};

export function MyVaccinesGrid({ stackProps }: Props) {
  return (
    <View style={{ height: "70%" }}>
      <FlatList
        data={vaccinesMocked}
        renderItem={({ item }) => (
          <MyVaccineCard
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
