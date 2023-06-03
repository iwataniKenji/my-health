import { Gender } from "../enums/Gender";

export type User = {
  id: string;
  name: string;
  gender: Gender;
  dateOfBirth: Date;
  email: string;
};
