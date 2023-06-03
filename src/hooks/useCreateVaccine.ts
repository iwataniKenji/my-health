import { db } from "../firebase/config";
import { VaccineFormData } from "../types/VaccineFormData";
import { addDoc, collection } from "firebase/firestore";

type HookReturn = (formData: VaccineFormData) => void;

export const useCreateVaccine = (): HookReturn => {
  return (formData: VaccineFormData) => {
    console.log("formData", formData);

    addDoc(collection(db, "vaccines"), {
      ...formData,
      imageUrl: null,
    })
      .then(() => {
        alert("Vaccine created successfully!");
      })
      .catch((error) => {
        alert("Error writing document: " + error);
      });
  };
};
