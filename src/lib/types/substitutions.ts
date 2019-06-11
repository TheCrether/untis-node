import { Response } from './../interfaces';
import { ID } from './timetable';
export interface SubstitutionResponse extends Response {
  result: Substitution[];
}

export interface Substitution {
  type: string;
  lsid: string; // lesson id
  date: number;
  startTime: number;
  endTime: number;
  kl?: ID[];
  te?: ID[];
  su?: ID[];
  ro?: ID[];
  txt?: string; // substitution text
  reschedule?: {
    date: number;
    startTime: number;
    endTime: number;
  };
}
