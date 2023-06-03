import { db } from "../firebase/config";
import { VaccineFormData } from "../types/VaccineFormData";
import { addDoc, collection } from "firebase/firestore";

type HookReturn = (formData: VaccineFormData) => void;

export const useCreateVaccine = (): HookReturn => {
  return (formData: VaccineFormData) => {
    addDoc(collection(db, "vaccines"), {
      ...formData,
      imageUrl: null,
    }).catch((error) => {
      alert("Error writing document: " + error);
    });
  };
};
