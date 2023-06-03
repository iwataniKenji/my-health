import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { reducerSetLogin } from "../redux/authSlice";
import { useDispatch } from "react-redux";

type HookReturn = (
  email: string,
  password: string,
  navigate: () => void,
  setShowErrorMessage: (value: boolean) => void
) => void;

export const useAuthenticate = (): HookReturn => {
  const dispatch = useDispatch();

  return (
    email: string,
    password: string,
    navigate: () => void,
    setShowErrorMessage: (value: boolean) => void
  ) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userLogged) => {
        const userRef = doc(db, "users", userLogged.user.uid as string);

        getDoc(userRef).then((user) => {
          dispatch(
            reducerSetLogin({
              id: user.data()?.id,
              name: user.data()?.name,
            })
          );
        });

        navigate();
      })
      .catch((error) => {
        setShowErrorMessage(true);

        console.log("Error:", JSON.stringify(error));
      });
  };
};
