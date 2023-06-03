import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

type HookReturn = (userId: string, vaccineId: string) => void;

export const useRemoveVaccine = (): HookReturn => {
  return async (userId: string, vaccineId: string) => {
    const userVaccinesRef = doc(db, `users/${userId}/vaccines/${vaccineId}`);

    deleteDoc(userVaccinesRef).catch((error) => {
      alert("Error removing document: " + error);
    });
  };
};
