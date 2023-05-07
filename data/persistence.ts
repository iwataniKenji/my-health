import { Vaccine } from "../types/Vaccine";

export const vaccinesMocked: Vaccine[] = [
  {
    id: "1",
    title: "BCG",
    doses: "Dose única",
    date: new Date("2022-06-11"),
    nextDose: new Date("2022-06-11"),
    // image: "./assets/images/vac-example.jpeg",
  },
  {
    id: "2",
    title: "Febre amarela",
    doses: "1a. dose",
    date: new Date("2022-11-10"),
    nextDose: new Date("2023-10-11"),
    // image: "./assets/images/vac-example.jpeg",
  },
  {
    id: "3",
    title: "Febre amarela",
    doses: "1a. dose",
    date: new Date("2022-11-10"),
    nextDose: new Date("2023-10-02"),
    // image: "./assets/images/vac-example.jpeg",
  },
];