import { collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { UserFormData } from "../types/UserFormData";
import { addDoc } from "firebase/firestore";
import { omit } from "lodash";

type HookReturn = (userFormData: UserFormData, navigate: () => void) => void;

const useCreateUser = (): HookReturn => {
  const signup = (userFormData: UserFormData, navigate: () => void) => {
    createUserWithEmailAndPassword(
      auth,
      userFormData.email,
      userFormData.password
    )
      .then((userCreated) => {
        addDoc(collection(db, "users"), {
          id: userCreated.user?.uid,
          ...omit(userFormData, ["password"]),
        }).catch((error) => {
          alert("Error writing document: " + error);
        });

        alert("Usuário criado com sucesso");

        navigate();
      })
      .catch((e) => {
        alert("Erro ao criar usuário");
      });
  };

  return signup;
};

export default useCreateUser;
