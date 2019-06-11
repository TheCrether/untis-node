import { Response } from './../interfaces';
export interface StatusResponse extends Response {
	result: {
		lstypes: [
			{
				ls: Color;
			},
			{
				oh: Color;
			},
			{
				sb: Color;
			},
			{
				bs: Color;
			},
			{
				ex: Color;
			}
		];
		codes: [
			{
				cancelled: Color;
			},
			{
				irregular: Color;
			}
		];
	};
}

export interface Color {
	foreColor: string;
	backColor: string;
}
