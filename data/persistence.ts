import { Doses } from "../enums/Doses";
import { Vaccine } from "../types/Vaccine";

export const vaccinesMocked: Vaccine[] = [
  {
    id: "1",
    title: "BCG",
    doses: Doses.FIRST_DOSE,
    date: new Date("2022-06-11"),
    nextDose: new Date("2022-06-11"),
    image: "vac-example.jpeg",
  },
  {
    id: "2",
    title: "Febre amarela",
    doses: Doses.SINGLE_DOSE,
    date: new Date("2022-11-10"),
    nextDose: new Date("2023-10-11"),
    image: "vac-example.jpeg",
  },
  {
    id: "3",
    title: "Febre amarela",
    doses: Doses.FIRST_DOSE,
    date: new Date("2022-11-10"),
    nextDose: new Date("2023-10-02"),
    image: "vac-example.jpeg",
  },
  {
    id: "4",
    title: "Febre amarela",
    doses: Doses.FIRST_DOSE,
    date: new Date("2022-11-10"),
    nextDose: new Date("2023-10-02"),
    image: "vac-example.jpeg",
  },
];
