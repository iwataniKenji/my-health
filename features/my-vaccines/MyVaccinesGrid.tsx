import { View } from "react-native";
import { MyVaccineCard } from "./MyVaccineCard";
import { vaccinesMocked } from "../../data/persistence";

export function MyVaccinesGrid() {
  return (
    <View
      style={{
        gap: 10,
      }}
    >
      {vaccinesMocked.map((vaccine) => (
        <MyVaccineCard
          key={vaccine.id}
          title={vaccine.title}
          doses={vaccine.doses}
          date={vaccine.date}
          nextDose={vaccine.nextDose}
        />
      ))}
    </View>
  );
}
