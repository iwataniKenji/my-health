import { Doses } from '../enums/Doses';

export type VaccineFormData = {
  title: string;
  doses: Doses;
  date?: Date;
  nextDose?: Date;
  image?: string;
};
