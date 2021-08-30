
import {ACTION_TYPE} from "../action";
import { AnyAction } from 'redux'
import { ShopCollectionModel } from "../../Models/model";

const INIT_STATE: ShopCollectionModel = {
	collections: undefined
};

export const shopReducer:(state:ShopCollectionModel,action: AnyAction) => ShopCollectionModel = (state = INIT_STATE, action:AnyAction) => {
	switch(action.type) {
		case ACTION_TYPE.UPDATE_SHOP_COLLECTION:
			return {
				...state,
				collections: action.payload
			}
		default:
			return state
	}
}
