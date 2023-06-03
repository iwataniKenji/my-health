import { collection, doc } from "firebase/firestore";
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
  const userId = useSelector((state: any) => state.auth.id);
  const vaccines = useSelector((state: any) => state.vaccines);
  const dispatch = useDispatch();

  const fetchVaccines = useCallback(() => {
    const userRef = collection(db, "users");
    const userDocRef = doc(userRef, userId);
    const vaccinesRef = collection(userDocRef, "vaccines");

    const unsubscribe = onSnapshot(vaccinesRef, (result) => {
      const vaccinesList: Vaccine[] = [];

      result.forEach((doc) => {
        vaccinesList.push({
          id: doc.id,
          title: doc.data().title,
          doses: doc.data().dose,
          date: doc.data().date ? doc.data().date.toDate() : null,
          nextDose: doc.data().nextDose ? doc.data().nextDose.toDate() : null,
          imageUrl: doc.data().imageUrl,
        });
      });

      dispatch(reducerSetVaccineList(vaccinesList));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch, userId]);

  useEffect(() => {
    const unsubscribe = fetchVaccines();

    return () => {
      unsubscribe();
    };
  }, [fetchVaccines]);

  return {
    vaccines,
    listRefresh: fetchVaccines,
  };
};

export default useVaccineList;
