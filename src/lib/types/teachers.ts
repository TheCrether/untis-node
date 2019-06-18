import { Response } from "./../interfaces";
export interface TeacherResponse extends Response {
  result: Teacher[];
}

export interface Teacher {
  id: number;
  name: string;
  foreName: string;
  longname: string;
  foreColor: string;
  backColor: string;
}

export function getTeacherByID(teachers: TeacherResponse, id: number) {
  for (const teacher of teachers.result) {
    if (teacher.id === id) {
      return teacher;
    }
  }
}
