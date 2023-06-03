import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

type HookReturn = (vaccineId: string) => void;

export const useRemoveVaccine = (): HookReturn => {
  return async (vaccineId: string) => {
    deleteDoc(doc(db, "vaccines", vaccineId))
      .then(() => {
        alert("Vaccine deleted successfully!");
      })
      .catch((error) => {
        alert("Error removing document: " + error);
      });
  };
};
