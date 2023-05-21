import { db } from "../firebase/config";
import { VaccineFormData } from "../types/VaccineFormData";
import { addDoc, collection } from "firebase/firestore";

type HookReturn = (formData: VaccineFormData) => void;

export const useCreateVaccine = (): HookReturn => {
  return (formData: VaccineFormData) => {
    // TODO -> migrate to firebase
    // vaccinesMocked.push({
    //   ...formData,
    //   id: (vaccinesMocked.length + 1).toString(),
    // });

    // console.log("array after creation", vaccinesMocked);

    console.log("formData", formData);

    addDoc(collection(db, "vaccines"), {
      ...formData,
      image: null,
    })
      .then(() => {
        alert("Vaccine created successfully!");
      })
      .catch((error) => {
        alert("Error writing document: " + error);
      });
  };
};
