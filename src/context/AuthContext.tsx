import React from "react";
interface Date {
	nanoseconds: number
	seconds: number
}
export interface User {
	displayName: string;
	email: string;
	id: string;
	createdAt: Date;
}
export const AuthContext = React.createContext<User | null>(null);