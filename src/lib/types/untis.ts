import { Response } from "../interfaces";

export interface Untis extends Response {
  result: {
    sessionId: string,
    personType: number,
    personId: number,
    klasseId: number
  };
}
