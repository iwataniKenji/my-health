import { collection, query } from "firebase/firestore";
import { useCallback, useEffect } from "react";
import { Vaccine } from "../types/Vaccine";
import { onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { reducerSetVaccineList } from "../redux/vaccineSlice";

type HookReturn = {
  vaccines: Vaccine[];
  listRefresh: () => void;
};

const useVaccineList = (): HookReturn => {
  const vaccines = useSelector((state: any) => state.vaccines);
  const dispatch = useDispatch();

  const fetchVaccines = useCallback(() => {
    const q = query(collection(db, "vaccines"));

    onSnapshot(q, (result) => {
      const vaccinesList: Vaccine[] = [];

      result.forEach((doc: any) => {
        vaccinesList.push({
          id: doc.id,
          title: doc.data().title,
          doses: doc.data().dose,
          date: doc.data().date.toDate(),
          nextDose: doc.data().nextDose.toDate(),
          imageUrl: doc.data().imageUrl,
        });
      });

      dispatch(reducerSetVaccineList(vaccinesList));
    });
  }, []);

  useEffect(() => {
    fetchVaccines();
  }, [fetchVaccines]);

  return {
    vaccines,
    listRefresh: fetchVaccines,
  };
};

export default useVaccineList;
