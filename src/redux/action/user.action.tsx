import { ACTION_TYPE } from "./actionTypes";
import { User } from "../../Models/model";
import {AnyAction} from "redux";

export const setUser:(user:User | null) => AnyAction = (user) => ({
		type: ACTION_TYPE.SET_USER,
		payload: user
});
