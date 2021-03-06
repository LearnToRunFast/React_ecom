
import {ACTION_TYPE} from "../action";
import { AnyAction } from 'redux'
import { ShopCollectionModel } from "../../Models/model";

const INIT_STATE: ShopCollectionModel = {
	collections: undefined,
	isFetchingCollections: false,
	errorMessage: "",
};

export const shopReducer:(state:ShopCollectionModel,action: AnyAction) => ShopCollectionModel = (state = INIT_STATE, action:AnyAction) => {
	switch(action.type) {
		case ACTION_TYPE.UPDATE_SHOP_COLLECTION:
			return {
				...state,
				collections: action.payload
			}
		case ACTION_TYPE.FETCH_SHOP_COLLECTION_START:
			return {
				...state,
				isFetchingCollections: true
			}
		case ACTION_TYPE.FETCH_SHOP_COLLECTION_SUCCESS:
			return {
				...state,
				isFetchingCollections: false,
				collections: action.payload
			}
		case ACTION_TYPE.FETCH_SHOP_COLLECTION_FAILURE:
			return {
				...state,
				isFetchingCollections: false,
				errorMessage: action.payload
			}
		default:
			return state
	}
}
