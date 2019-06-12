/**
 * The main file where all the functions that use Axios in are
 */

import { SubstitutionResponse } from './types/substitutions';
import { PersonResponse } from './types/person';
import { SchoolyearResponse } from './types/schoolyear';
import { StudentResponse } from './types/student';
import { ClassesResponse } from './types/klassen';
import { Request, Config, types, NotLoggedInError, LoggedInError } from './interfaces';
import { Untis } from './types/untis';
import { TeacherResponse, Teacher } from './types/teachers';
import { SubjectResponse } from './types/subjects';
import { RoomResponse } from './types/rooms';
import { DepartmentResponse } from './types/department';
import { HolidaysRepsonse } from './types/holiday';
import { TimegridResponse, getDay } from './types/time';
import { StatusResponse } from './types/status';
import { TimetableResponse, CustomTimetableResponse } from './types/timetable';
import { ClassRegEventResponse } from './types/classregevents';
import { ExamResponse } from './types/exams';
import { AbsenceResponse } from './types/absences';
import { RemarksResponse, RemarksGroupResponse } from './types/remark';
import axios from 'axios';
let id = 0

let url = "";
let isLoggedIn = false;
const a = axios.create({
	withCredentials: true,
	responseType: "json"
})
let jsessionid = ""

/**
 * Signs you into Untis
 * @typeparam Config  the config for logging in
 * @returns {Promise<Untis>} Promise of type Untis when successful login
 */
export function login(config: Config): Promise<Untis> {
	return new Promise((resolve, reject) => {
		if (isLoggedIn) {
			throw new LoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "authenticate",
			params: {
				user: config.username,
				password: config.password,
				client: config.client
			}
		}
		id++;
		url = getURL(config.server, config.school);
		a.post(url, request)
			.then(data => {
				const header: string = data.headers["set-cookie"][0];
				console.log(header);
				if (header.includes("JSESSIONID")) {
					resolve(data.data)
					jsessionid = "JSESSIONID=" + data.data.result.sessionId;
					isLoggedIn = true;
				}
			})
			.catch(err => {
				reject(err);
				url = "";
				isLoggedIn = false
			});
	})
}

/**
 * Logs you out of your session
 * @returns {Promise<boolean>} returns true if successful logout and false if not
 */
export function logout(): Promise<boolean> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "logout",
			params: {}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				return true;
			})
			.catch(err => {
				reject(err);
				return false;
			});
	});
}

/**
 * gets the teachers
 * @returns {Promise<TeacherResponse>} Promise of type {@link TeacherResponse}
 */
export function getTeachers(): Promise<TeacherResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getTeachers",
			params: {}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => reject(err));
	})
}

/**
 * gets the students
 * @returns {Promise<StudentResponse>} Promise of type StudentResponse
 */
export function getStudents(): Promise<StudentResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getStudents",
			params: {}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * gets the classes
 * @returns {Promise<ClassesResponse>} Promise of type ClassesResponse
 */
export function getClasses(): Promise<ClassesResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getKlassen",
			params: {}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * gets the subjects
 * @returns {Promise<SubjectResponse>} Promise of type SubjectResponse
 */
export function getSubjects(): Promise<SubjectResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getSubjects",
			params: {}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * gets the rooms
 * @returns {Promise<RoomResponse>} Promise of type RoomResponse
 */
export function getRooms(): Promise<RoomResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getRooms",
			params: {}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * gets the departments
 * @returns {Promise<DepartmentResponse>} Promise of type DepartmentResponse
 */
export function getDepartments(): Promise<DepartmentResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getDepartments",
			params: {}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * gets all holidays
 * @returns {Promise<HolidaysResponse>} Promise of type HolidaysResponse
 */
export function getHolidays(): Promise<HolidaysRepsonse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getHolidays",
			params: {}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * gets the timegrid for the institution
 * @returns {Promise<TimegridResponse>} Promise of type TimegridResponse
 */
export function getTimegrid(): Promise<TimegridResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getTimegridUnits",
			params: {}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * gets the "status Data" for a institution which are farbcodes for lessons etc.
 * @returns {Promise<StatusResponse>} Promise of type StatusResponse
 */
export function getStatusData(): Promise<StatusResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getStatusData",
			params: {}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * gets the current schoolyear
 * @returns {Promise<SchoolyearResponse>} Promise of type SchoolYearResponse
 */
export function getCurrentSchoolyear(): Promise<SchoolyearResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getCurrentSchoolyear",
			params: {}
		}; id++;

		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * gets all available schoolyears
 * @returns {Promise<SchoolyearResponse>} Promise of type SchoolyearResponse
 */
export function getAvailableSchoolyears(): Promise<SchoolyearResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getSchoolyears",
			params: {}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * @param id the element id
 * @param type the element type
 * @param startDate the start date of the time period
 * @param endDate the end date of the time period
 * @returns {Promise<TimetableResponse>} Promise of type TimetableResponse
 */
export function getSimpleTimetable(id: number, type: number, startDate: number, endDate: number): Promise<TimetableResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const today: Date = new Date();
		const date = today.getFullYear() + "" + today.getMonth() + today.getDate();
		const numberDate = Number(date);
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getTimetable",
			params: {
				id,
				type,
				startDate: startDate ? startDate : numberDate,
				endDate: endDate ? endDate : numberDate,
			}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}


/**
 * 
 * @param _id an element id, either internal or external
 * @param type type of element
 * @param keyType keyType for the id
 * @param startDate the start date for the time period
 * @param endDate the end date for the time period
 * @param onlyBaseTimetable boolean, returns only the base timetable if true (default: false)
 * @param showBooking boolean, returns the booking info if true (default: false)
 * @param showInfo boolean, returns the period's information if true (default: false)
 * @param showSubstText boolean, returns the period's substitution text if true (default: false)
 * @param showLsText boolean, returns the the text of the period's lessons if true (default: false)
 * @param showLsNumber boolean, returns the number of the lesson if true (default: false)
 * @param showStudentgroup boolean, returns the name(s) of the studentgroup(s) if true (default: false)
 * @param klasseFields optional, array with an id, name, longname, and external key
 * @param roomFields optional, array with an id, name, longname, and external key
 * @param subjectFields optional, array with an id, name, longname, and external key
 * @param teacherFields optional, array with an id, name, longname, and external key
 * @returns {Promise<CustomTimetableResponse>} Promise of type CustomTimeTableResponse
 */
export function getCustomizableTimetable(
	_id: string,
	type: number,
	keyType: string | "id",
	startDate: number,
	endDate: number,
	onlyBaseTimetable: boolean | false,
	showBooking: boolean | false,
	showInfo: boolean | false,
	showSubstText: boolean | false,
	showLsText: boolean | false,
	showLsNumber: boolean | false,
	showStudentgroup: boolean | false,
	klasseFields?: string[],
	roomFields?: string[],
	subjectFields?: string[],
	teacherFields?: string[]
): Promise<CustomTimetableResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const today: Date = new Date();
		const date = today.getFullYear() + "" + today.getMonth() + today.getDate();
		const numberDate = Number(date);

		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getTimetable",
			params: {
				options: {
					element: {
						id: _id,
						type,
						keyType
					},
					startDate: startDate ? startDate : numberDate,
					endDate: endDate ? endDate : numberDate,
					onlyBaseTimetable,
					showBooking,
					showInfo,
					showSubstText,
					showLsText,
					showLsNumber,
					showStudentgroup,
					klasseFields,
					roomFields,
					subjectFields,
					teacherFields,
				}
			}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}
/**
 * 
 * @param type type of person
 * @param sn surname of person
 * @param fn forename of person
 * @param dob date of birth of the person, default: 0
 * @returns {Promise<PersonResponse>} Promise of type PersonResponse
 */
export function getPerson(type: number, sn: string, fn: string, dob: number | 0): Promise<PersonResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getPersonId",
			params: {
				sn,
				dob,
				type,
				fn
			}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * 
 * @param startDate the start date of the time period
 * @param endDate the end date of the time period
 * @param departmentId the departmentId where to search for substitutions, default: 0 (all departments)
 * @returns {Promise<SubstitutionResponse>} Promise of type SubstitutionsResponse
 */
export function getSubstitutions(startDate: number, endDate: number, departmentId: number | 0): Promise<SubstitutionResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getSubstitutions",
			params: {
				startDate,
				endDate,
				departmentId
			}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * 
 * @param startDate the start date for the time period
 * @param endDate the end date for the time period
 * @returns {Promise<ClassRegEventResponse>} Promise of type ClassRegEventResponse
 */
export function getClassRegisterEvents(startDate: number, endDate: number): Promise<ClassRegEventResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getClassregEvents",
			params: {
				startDate,
				endDate
			}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * 
 * @param examTypeId type of exam
 * @param startDate start date of the time period
 * @param endDate end date of the time period
 * @returns {Promise<ExamResponse>} PRomise of type ExamResponse
 */
export function getExams(examTypeId: string, startDate: number, endDate: number): Promise<ExamResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getExams",
			params: {
				examTypeId,
				startDate,
				endDate
			}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

export function getExamTypes() {
	// TODO Response
}

/**
 * 
 * @param startDate the start date of the time period
 * @param endDate the end date of the time period
 * @returns {Promise<AbsenceResponse>} Promise of type AbsenceResponse
 */
export function getAbsences(startDate: number, endDate: number): Promise<AbsenceResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getTimetableWithAbsences",
			params: {
				startDate,
				endDate
			}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * @returns {Promise<RemarksResponse>} Promise of type RemarksResponse
 */
export function getRemarks(): Promise<RemarksResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getClassregCategoryGroups",
			params: {}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * @returns {Promise<RemarksGroupResponse>} Promise of type RemarksGroupResponse
 */
export function getRemarksForGroups(): Promise<RemarksGroupResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getClassregCategoryGroups",
			params: {}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * 
 * @param startDate the start date of the time period
 * @param endDate the end date of the time period
 * @param _id the id for 
 * @param type 
 * @param keyType 
 * @returns {Promsie<ClassRegEventResponse>} Promise of type ClassRegEventResponse
 */
export function getCustomClassRegEvents(
	startDate: number,
	endDate: number,
	_id: string,
	type: types,
	keyType: "id" | "name" | "externalkey"
): Promise<ClassRegEventResponse> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		const request: Request = {
			id: `req${id}`,
			jsonrpc: "2.0",
			method: "getClassregEvents",
			params: {
				startDate,
				endDate,
				element: {
					id: _id,
					type,
					keyType
				}
			}
		};
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

/**
 * 
 * @param request the custom request you want to send
 * @returns {Promise<Response>} Promise of type Response
 */
export function sendCustomRequest(request: Request): Promise<Response> {
	return new Promise((resolve, reject) => {
		if (!isLoggedIn && url === "") {
			throw new NotLoggedInError();
		}
		id++;
		a.post(url, request, {
			headers: {
				cookie: jsessionid
			}
		})
			.then(data => {
				resolve(data.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

export function getURL(server: string, school: string): string {
	return `https://${server}.webuntis.com/WebUntis/jsonrpc.do?school=${school}`
}
