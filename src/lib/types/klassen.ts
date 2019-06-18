import { ID } from "./timetable";
import { Response } from "../interfaces";
export interface ClassesResponse extends Response {
  result: Class[];
}

export interface Class {
  id: number;
  name: string;
  longName: string;
  foreColor: string;
  backColor: string;
  did: number;
}

export function getClassByID(
  klassen: ClassesResponse,
  id: number
): Class | undefined {
  for (const klasse of klassen.result) {
    if (klasse.id === id) {
      return klasse;
    }
  }
}
