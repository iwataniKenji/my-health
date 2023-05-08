import { vaccinesMocked } from "../data/persistence";
import { VaccineFormData } from "../types/VaccineFormData";

type HookReturn = (vaccineId: string, formData: VaccineFormData) => void;

export const useUpdateVaccine = (): HookReturn => {
  return (vaccineId: string, formData: VaccineFormData) => {
    const foundVaccine = vaccinesMocked.find((v) => v.id === vaccineId);

    if (foundVaccine) {
      foundVaccine.title = formData.title;
      foundVaccine.date = formData.date;
      foundVaccine.doses = formData.doses;
      foundVaccine.nextDose = formData.nextDose;
      foundVaccine.image = formData.image;
    }

    console.log("array after edition", vaccinesMocked);
  };
};
