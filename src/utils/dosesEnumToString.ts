import { Doses } from "../enums/Doses";

export function dosesEnumToString(doses: Doses): string {
  return (
    {
      [Doses.FIRST_DOSE]: "1ª Dose",
      [Doses.SECOND_DOSE]: "2ª Dose",
      [Doses.THIRD_DOSE]: "3ª Dose",
      [Doses.SINGLE_DOSE]: "Dose Única",
    }[doses] || "Não definido"
  );
}
