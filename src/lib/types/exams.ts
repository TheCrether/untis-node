import { Response } from "./../interfaces";

export interface ExamResponse extends Response {
  result: Exam[];
}

export interface Exam {
  id: number;
  classes: number[];
  teachers: number[];
  students: number[];
  subject: number;
  date: number;
  startTime: number;
  endTime: number;
}
