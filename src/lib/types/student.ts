import { Response } from "./../interfaces";
export interface StudentResponse extends Response {
  result: Student[];
}

export interface Student {
  id: number;
  key: string;
  name: string;
  foreName: string;
  longName: string;
  gender: string;
}
