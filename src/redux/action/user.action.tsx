import { ACTION_TYPE } from "./actionTypes";
import { UserModel } from "../../Models/User.model";
interface UserAction {
	type: ACTION_TYPE;
	payload: UserModel | null;
}
export const setUser:(user:UserModel|null) => UserAction = (user) => ({
		type: ACTION_TYPE.SET_USER,
		payload: user
});
