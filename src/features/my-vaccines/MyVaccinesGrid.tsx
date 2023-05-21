import { View, FlatList } from "react-native";
import { MyVaccineCard } from "./MyVaccineCard";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
import { Vaccine } from "../../types/Vaccine";

type Props = {
  stackProps: any;
  search: string;
};

export function MyVaccinesGrid({ stackProps, search }: Props) {
  // TODO -> mudar para state global
  const [vaccines, setVaccines] = useState<Vaccine[]>([]);

  const q = query(collection(db, "vaccines"));

  useEffect(() => {
    onSnapshot(q, (result) => {
      const vaccinesList: any = [];

      result.forEach((doc: any) => {
        vaccinesList.push({
          id: doc.id,
          title: doc.data().title,
          doses: doc.data().doses,
          date: doc.data().date,
          nextDose: doc.data().nextDose,
          image: doc.data().image,
        });
      });

      setVaccines(vaccines);
    });
  }, []);

  return (
    <View style={{ height: "70%" }}>
      <FlatList
        data={vaccines.filter((vaccine) =>
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
