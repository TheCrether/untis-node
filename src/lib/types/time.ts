import { Response } from "../interfaces";

export function getTime(time: Time) {
  const fStart = leadingZeros(Math.floor(time.startTime / 100).toString());
  const fEnd = leadingZeros(Math.floor(time.endTime / 100).toString());
  const fStartEnd = leadingZeros((time.startTime % 100).toString());
  const fEndEnd = leadingZeros((time.endTime % 100).toString());
  return {
    start: `${fStart}:${fStartEnd}`,
    end: `${fEnd}:${fEndEnd}`
  };
}

function leadingZeros(number: string) {
  for (let i = number.length; i < 2; i++) {
    number = "0" + number;
  }
  return number;
}

export function getDay(date: number) {
  return {
    year: Math.floor(date / 10000),
    month: Math.floor(date % 10000 / 100),
    day: Math.floor(date % 100)
  };
}

export interface TimegridResponse extends Response {
  jsonrpc: "2.0";
  id: "ID";
  result: Timeunit[];
}

export interface Timeunit {
  day: string;
  timeUnits: Time[];
}

export interface Time {
  startTime: number;
  endTime: number;
}

export interface Day {
  id: string;
  name: string;
  longName: string;
  startDate: number;
  endDate: number;
}

