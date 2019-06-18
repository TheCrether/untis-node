export type methods =
  | "authenticate"
  | "getTeachers"
  | "logout"
  | "getStudents"
  | "getKlassen"
  | "getSubjects"
  | "getRooms"
  | "getHolidays"
  | "getTimegridUnits"
  | "getStatusData"
  | "getCurrentSchoolyear"
  | "getSchoolyears"
  | "getTimetable"
  | "getLatestImportTime"
  | "getPersonId"
  | "getDepartments"
  | "getClassregEvents"
  | "getSubstitutions"
  | "getExams"
  | "getTimetableWithAbsences"
  | "getClassregCategories"
  | "getClassregCategoryGroups";
export type types = 1 | 2 | 3 | 4 | 5;

export interface Config {
  username: string;
  password: string;
  school: string;
  server: string;
  client: string;
}

export interface Request {
  id?: string;
  method?: methods;
  params?: object;
  jsonrpc?: "2.0";
}

/**
 * The base structure of the typical Repsonse
 */
export interface Response {
  jsonrpc: "2.0";
  id: string;
  result: object | number;
  error?: object;
  code?: number;
}

export class NotLoggedInError extends Error {
  constructor(...args) {
    args.push("NOT LOGGED IN");
    super(...args);
    Error.captureStackTrace(this, NotLoggedInError);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class LoggedInError extends Error {
  constructor(...args) {
    args.push("ALREADY LOGGED IN");
    super(...args);
    Error.captureStackTrace(this, LoggedInError);
  }
}
