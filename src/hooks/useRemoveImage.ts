import { deleteObject, ref } from "firebase/storage";
import { storage } from "../firebase/config";

type HookReturn = (oldImageUrl: string) => Promise<void>;

export const useRemoveImage = (): HookReturn => {
  return async (oldImageUrl: string) => {
    const oldImagePath = decodeURIComponent(
      oldImageUrl.split("/o/")[1].split("?")[0]
    );

    const oldImageRef = ref(storage, oldImagePath);

    await deleteObject(oldImageRef);
  };
};
