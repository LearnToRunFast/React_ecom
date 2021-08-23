
import {ACTION_TYPE} from "../action/actionTypes";
import {User} from "../../Models/User.model"
import { AnyAction } from 'redux'
const INIT_STATE = {
	user: null
}
interface State {
	user: {
		user: User
	} | null
}
export const userReducer:(state:State,action: AnyAction) => State = (state: State = INIT_STATE, action:AnyAction) => {
	switch(action.type) {
		case ACTION_TYPE.SET_USER:
			return {
				...state,
				user: action.payload
			}
		default:
			return state
	}
}


// selector
export const getUser: (state: State)=> User | undefined = (state: State) => state.user?.user;
