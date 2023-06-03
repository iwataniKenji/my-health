import { doc, updateDoc } from "firebase/firestore";
import { VaccineFormData } from "../types/VaccineFormData";
import { db } from "../firebase/config";

type HookReturn = (
  userId: string,
  vaccineId: string,
  formData: VaccineFormData,
  navigate: () => void
) => void;

export const useUpdateVaccine = (): HookReturn => {
  return (
    userId: string,
    vaccineId: string,
    formData: VaccineFormData,
    navigate: () => void
  ) => {
    if (!userId) return;

    const vaccineRef = doc(db, `users/${userId}/vaccines/${vaccineId}`);

    updateDoc(vaccineRef, {
      ...formData,
      imageUrl: null, // TODO -> mudar para o valor correto
    })
      .then(() => navigate())
      .catch((error) => {
        console.log("error", error);

        alert("Error updating document: " + error);
      });
  };
};
