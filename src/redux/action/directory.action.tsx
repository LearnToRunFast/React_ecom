import { ACTION_TYPE } from "./actionTypes";
import { ShoppingSection } from "../../Models/model";
import {AnyAction} from "redux";

export const addDirectory:(directory: ShoppingSection) => AnyAction = (directory) => ({
		type: ACTION_TYPE.ADD_DIRECTORY,
		payload: directory
});
