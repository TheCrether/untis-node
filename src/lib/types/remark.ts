import { Response } from "./../interfaces";
export interface RemarksResponse extends Response {
  result: Remark[];
}

export interface Remark {
  id: number;
  name: string;
  longName: string;
  groupId: number;
}

export interface RemarksGroupResponse extends Response {
  result: RemarkGroup[];
}

export interface RemarkGroup {
  id: number;
  name: string;
}
