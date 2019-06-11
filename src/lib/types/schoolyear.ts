import { Response } from './../interfaces';
export interface SchoolyearResponse extends Response {
	result: Schoolyear[];
}

export interface Schoolyear {
	id: number;
	name: string;
	startDate: number;
	endDate: number;
}