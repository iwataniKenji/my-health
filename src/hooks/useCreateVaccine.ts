import { db } from "../firebase/config";
import { VaccineFormData } from "../types/VaccineFormData";
import { addDoc, collection } from "firebase/firestore";

type HookReturn = (
  userId: string,
  formData: VaccineFormData,
  navigate: () => void
) => void;

export const useCreateVaccine = (): HookReturn => {
  return (userId: string, formData: VaccineFormData, navigate: () => void) => {
    if (!userId) return;

    const userVaccinesRef = collection(db, `users/${userId}/vaccines`);

    addDoc(userVaccinesRef, {
      ...formData,
      date: formData.date ? formData.date : null,
      nextDose: formData.nextDose ? formData.nextDose : null,
      imageUrl: null, // TODO -> mudar para o valor correto
    })
      .then(() => navigate())
      .catch((error) => {
        console.log("Error writing document: " + error);
      });
  };
};
