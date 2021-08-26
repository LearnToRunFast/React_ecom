import { ACTION_TYPE } from "./actionTypes";
import { ShopCollection } from "../../Models/model";
import {AnyAction} from "redux";

export const addShopCategory:(shopCategory: ShopCollection) => AnyAction = (data) => ({
		type: ACTION_TYPE.ADD_SHOP_COLLECTION,
		payload: data
});
