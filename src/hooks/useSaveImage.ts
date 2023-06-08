import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/config";
import uuid from "react-native-uuid";

type HookReturn = (imageUrl: string) => Promise<string>;

export const useSaveImage = (): HookReturn => {
  const imageRef = ref(storage, `images/${uuid.v4()}`);

  return async (imageUrl: string) => {
    const file = await fetch(imageUrl);
    const blob = await file.blob();

    await uploadBytes(imageRef, blob, {
      contentType: "image/jpeg",
    });

    return await getDownloadURL(imageRef);
  };
};
