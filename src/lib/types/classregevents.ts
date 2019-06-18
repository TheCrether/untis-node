import { Response } from "./../interfaces";
export interface ClassRegEventResponse extends Response {
  result: ClassRegEvent[];
}

export interface ClassRegEvent {
  studentid: string;
  surname: string;
  forname: string;
  date: number;
  subject: string;
  reason: string;
  text: string;
  categoryId: number;
}
