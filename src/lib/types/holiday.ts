import { Day } from "./time";
import { Response } from "../interfaces";
export interface HolidaysRepsonse extends Response {
  result: Day[];
}
