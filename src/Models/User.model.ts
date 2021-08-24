
interface Date {
	nanoseconds: number
	seconds: number
}
export interface UserModel {
	displayName?: string;
	email?: string;
	id?: string;
	createdAt?: Date;
}
