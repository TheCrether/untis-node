import { Response } from './../interfaces';
export interface DepartmentResponse extends Response {
	result: Department[];
}

export interface Department {
	id: number;
	name: string;
	longName: string;
}