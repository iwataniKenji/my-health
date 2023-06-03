import { doc, updateDoc } from "firebase/firestore";
import { VaccineFormData } from "../types/VaccineFormData";
import { db } from "../firebase/config";

type HookReturn = (vaccineId: string, formData: VaccineFormData) => void;

export const useUpdateVaccine = (): HookReturn => {
  return (vaccineId: string, formData: VaccineFormData) => {
    updateDoc(doc(db, "vaccines", vaccineId), {
      ...formData,
      imageUrl: null, // TODO -> mudar para o valor correto
    }).catch((error) => {
      alert("Error updating document: " + error);
    });
  };
};
