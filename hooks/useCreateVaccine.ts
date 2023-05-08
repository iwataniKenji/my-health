import { vaccinesMocked } from "../data/persistence";
import { VaccineFormData } from "../types/VaccineFormData";

type HookReturn = (formData: VaccineFormData) => void;

export const useCreateVaccine = (): HookReturn => {
  return (formData: VaccineFormData) => {
    vaccinesMocked.push({
      ...formData,
      id: (vaccinesMocked.length + 1).toString(),
    });

    console.log("array after creation", vaccinesMocked);
  };
};
