import { ID } from './timetable';
import { Response } from '../interfaces';
export interface SubjectResponse extends Response {
  result: Subject[];
}

export interface Subject {
  id: number;
  name: string;
  longName: string;
  foreColor: string;
  backColor: string;
}

export function getSubjectById(subjects: SubjectResponse, id: number): Subject | undefined {
  for (const subject of subjects.result) {
    if (subject.id === id) {
      return subject;
    }
  }
}
