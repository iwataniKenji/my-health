import { Doses } from "../enums/Doses";
import { SelectOptions } from "../types/SelectOptions";

export const dosesValues: SelectOptions[] = [
  {
    value: Doses.FIRST_DOSE,
    label: "1ª Dose",
  },
  {
    value: Doses.SECOND_DOSE,
    label: "2ª Dose",
  },
  {
    value: Doses.THIRD_DOSE,
    label: "3ª Dose",
  },
  {
    value: Doses.SINGLE_DOSE,
    label: "Dose Única",
  },
];
