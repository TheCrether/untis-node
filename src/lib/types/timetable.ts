import { Response } from "./../interfaces";
import { Class, ClassesResponse, getClassByID } from "./klassen";
import { Time } from "./time";
import { getSubjectById, SubjectResponse, Subject } from "./subjects";
import { getRoomByID, RoomResponse, Room } from "./rooms";
import { getTeacherByID, Teacher, TeacherResponse } from "./teachers";
export interface TimetableResponse extends Response {
  result: Lesson[];
}

export interface Lesson {
  id: number;
  date: number;
  startTime: number;
  endTime: number;
  kl: ID[]; // klassen
  te: ID[]; // teacher
  su: ID[]; // subjects
  ro: ID[]; // rooms;
  lsType?: string; // omitted if lesson
  code?: string;
  lstext?: string;
  statflags?: string;
  activityType?: string;
}

export interface CustomTimetableResponse extends Response {
  result: CustomLesson[];
}

export interface CustomLesson {
  id: number;
  date: number;
  startTime: number;
  endTime: number;
  lsType?: string; // omitted if lesson
  code?: string;
  info: string;
  substText: string;
  lstext: string;
  lsnumber: number;
  statflags: string;
  activityType?: string;
  sg: string;
  bkRemark?: string;
  bkText?: string;
  kl: ID[]; // klassen
  te: ID[]; // teacher
  su: ID[]; // subjects
  ro: ID[]; // rooms;
}

export interface ID {
  id: number;
}

// export interface ParsedLesson {
//   type: string | undefined;
//   teachers: Teacher[];
//   classes: Class[];
//   rooms: Room[];
//   subjects: Subject[];
//   time: Time;
// }

// export function parseLessons(
//   timetable: TimetableResponse,
//   subjects: SubjectResponse,
//   rooms: RoomResponse,
//   classes: ClassesResponse,
//   teachers?: TeacherResponse
// ): ParsedLesson[] {
//   let parsed: ParsedLesson[] = [];
//   for (let lesson of timetable.result) {
//     let subjectList: Subject[] = [];
//     for (let subject of lesson.su) {
//       subjectList.push(getSubjectById(subjects, subject.id));
//     }
//     let roomsList: Room[] = [];
//     for (let room of lesson.ro) {
//       let id = getRoomByID(rooms, room.id);
//       if (id !== undefined) {
//         roomsList.push(id);
//       }
//     }
//     let teacherList: Teacher[] = [];
//     // for (let teacher of lesson.te) {
//     //   teacherList.push(getTeacherByID(teachers, teacher.id));
//     // }
//     let classList: Class[] = [];
//     for (let _class of lesson.kl) {
//       let id = getClassByID(classes, _class.id);
//       if (id !== undefined) {
//         classList.push(id);
//       }
//     }
//     const temp: ParsedLesson = {
//       classes: classList,
//       subjects: subjectList,
//       teachers: teacherList,
//       rooms: roomsList,
//       time: {
//         startTime: lesson.startTime,
//         endTime: lesson.endTime
//       },
//       type: lesson.activityType,
//     }
//     parsed.push(temp);
//   }
//   return parsed;
// }
