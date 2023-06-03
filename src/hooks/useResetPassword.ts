import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config";

type HookReturn = (email: string, navigate: () => void) => void;

export const useResetPassword = (): HookReturn => {
  return (email: string, navigate: () => void) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("E-mail de recuperação de senha enviado com sucesso!");

        navigate();
      })
      .catch((error) => {
        alert("Erro ao enviar e-mail de recuperação de senha");

        console.log("Error:", JSON.stringify(error));
      });
  };
};
