import { vaccinesMocked } from "../data/persistence";

type HookReturn = (vaccineId: string) => void;

export const useRemoveVaccine = (): HookReturn => {
  return async (vaccineId: string) => {
    vaccinesMocked.splice(
      vaccinesMocked.findIndex((v) => v.id === vaccineId),
      1
    );

    console.log("array after deletion", vaccinesMocked);
  };
};
