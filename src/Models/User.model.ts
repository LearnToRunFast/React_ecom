
interface Date {
	nanoseconds: number
	seconds: number
}
export interface User {
	displayName?: string;
	email?: string;
	id?: string;
	createdAt?: Date;
}
export interface UserModel {
	user: User | null
}
