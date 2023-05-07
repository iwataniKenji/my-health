export type Vaccine = {
  id: string;
  title: string;
  doses: string;
  date: Date;
  nextDose?: Date;
  image?: string;
};
