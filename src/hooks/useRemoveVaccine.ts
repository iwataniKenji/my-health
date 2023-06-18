import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useDispatch } from "react-redux";
import { reducerSetFormIsLoading } from "../redux/formIsLoadingSlice";
import { useRemoveImage } from "./useRemoveImage";

type HookReturn = (
  userId: string,
  vaccineId: string,
  imageUrl?: string
) => void;

export const useRemoveVaccine = (): HookReturn => {
  const dispatch = useDispatch();
  const removeImage = useRemoveImage();

  return async (userId: string, vaccineId: string, imageUrl?: string) => {
    dispatch(reducerSetFormIsLoading(true));

    const userVaccinesRef = doc(db, `users/${userId}/vaccines/${vaccineId}`);

    if (imageUrl) removeImage(imageUrl);

    deleteDoc(userVaccinesRef)
      .catch((error) => {
        console.log("Error removing document: " + error);
      })
      .finally(() => {
        dispatch(reducerSetFormIsLoading(false));
      });
  };
};
