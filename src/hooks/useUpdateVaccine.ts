import { doc, updateDoc } from "firebase/firestore";
import { VaccineFormData } from "../types/VaccineFormData";
import { db } from "../firebase/config";

type HookReturn = (vaccineId: string, formData: VaccineFormData) => void;

export const useUpdateVaccine = (): HookReturn => {
  return (vaccineId: string, formData: VaccineFormData) => {
    // TODO -> migrate to firebase
    // const foundVaccine = vaccinesMocked.find((v) => v.id === vaccineId);

    // if (foundVaccine) {
    //   foundVaccine.title = formData.title;
    //   foundVaccine.date = formData.date;
    //   foundVaccine.doses = formData.doses;
    //   foundVaccine.nextDose = formData.nextDose;
    //   foundVaccine.image = formData.image;
    // }

    // console.log("array after edition", vaccinesMocked);

    updateDoc(doc(db, "vaccines", vaccineId), {
      ...formData,
      image: null, // TODO -> mudar para o valor correto
    })
      .then(() => {
        alert("Vaccine updated successfully!");
      })
      .catch((error) => {
        alert("Error updating document: " + error);
      });
  };
};
