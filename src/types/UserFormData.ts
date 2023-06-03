import { Gender } from "../enums/Gender";

export type UserFormData = {
  name: string;
  gender: Gender;
  dateOfBirth?: Date;
  email: string;
  password: string;
};
