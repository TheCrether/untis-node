import { Response } from "../interfaces";

export interface AbsenceResponse extends Response {
  result: {
    periodsWithAbsences: Absence[];
  };
}

export interface Absence {
  date: number;
  startTime: number;
  studentId: string;
  subjectId: string;
  teacherIds: string[];
  studentGroup: string;
  absenceReason: string;
  absentTime: number;
  user: string;
  checked: boolean;
  invalid: true;
}
