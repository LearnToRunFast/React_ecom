
import {ACTION_TYPE} from "../action";
import {UserModel} from "../../Models/model"
import { AnyAction } from 'redux'
const INIT_STATE = {
	user: null
}
interface ReducerState {
	user: UserModel | null
}

export const userReducer:(state:ReducerState,action: AnyAction) => ReducerState = (state: ReducerState = INIT_STATE, action:AnyAction) => {
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
