import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

type HookReturn = (vaccineId: string) => void;

export const useRemoveVaccine = (): HookReturn => {
  return async (vaccineId: string) => {
    // TODO -> migrate to firebase
    // vaccinesMocked.splice(
    //   vaccinesMocked.findIndex((v) => v.id === vaccineId),
    //   1
    // );

    // console.log("array after deletion", vaccinesMocked);

    deleteDoc(doc(db, "vaccines", vaccineId))
      .then(() => {
        alert("Vaccine deleted successfully!");
      })
      .catch((error) => {
        alert("Error removing document: " + error);
      });
  };
};
