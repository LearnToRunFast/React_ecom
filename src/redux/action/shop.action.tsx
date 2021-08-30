import { ACTION_TYPE } from "./actionTypes";
import { ShopCollection } from "../../Models/model";
import {AnyAction} from "redux";

export const updateCollections:(shopCategory: ShopCollection) => AnyAction = (data) => ({
		type: ACTION_TYPE.UPDATE_SHOP_COLLECTION,
		payload: data
});
