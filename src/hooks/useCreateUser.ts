import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { UserFormData } from "../types/UserFormData";
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
        const userDocRef = doc(db, "users", userCreated.user?.uid);

        setDoc(userDocRef, {
          ...omit(userFormData, ["password"]),
          id: userCreated.user?.uid as string,
          dateOfBirth: userFormData.dateOfBirth
            ? userFormData.dateOfBirth
            : null,
        }).then(() => {
          alert("Usuário criado com sucesso");

          navigate();
        });
      })
      .catch((error) => {
        alert("Erro ao criar perfil de usuário: " + error);
      });
  };

  return signup;
};

export default useCreateUser;
