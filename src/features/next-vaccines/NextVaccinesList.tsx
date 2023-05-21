import { FlatList, View } from "react-native";
import { NextVaccinesCard } from "./NextVaccinesCard";
import { useEffect, useState } from "react";
import { Vaccine } from "../../types/Vaccine";
import { db } from "../../firebase/config";
import { collection, onSnapshot, query } from "firebase/firestore";

export function NextVaccinesList() {
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
        numColumns={2}
      />
    </View>
  );
}
