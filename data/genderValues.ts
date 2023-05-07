import { Gender } from "../enums/Gender";
import { SelectOptions } from "../types/SelectOptions";

export const genderValues: SelectOptions[] = [
  {
    value: Gender.MALE,
    label: "Masculino",
  },
  {
    value: Gender.FEMALE,
    label: "Feminino",
  },
];
