import { Doses } from "./../enums/Doses";

export type Vaccine = {
  id: string;
  title: string;
  doses: Doses;
  date: Date;
  nextDose?: Date;
  image?: string;
};
