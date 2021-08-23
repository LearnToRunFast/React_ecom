import { ACTION_TYPE } from "./actionTypes";
import { User } from "../../Models/User.model";
interface UserAction {
	type: ACTION_TYPE;
	payload: User | null;
}
export const setUser:(user:User|null) => UserAction = (user) => ({
		type: ACTION_TYPE.SET_USER,
		payload: user
});
