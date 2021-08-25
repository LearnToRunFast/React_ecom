import { ACTION_TYPE } from "./actionTypes";
import { ShopCategory } from "../../Models/model";
import {AnyAction} from "redux";

export const addShopCategory:(shopCategory: ShopCategory) => AnyAction = (shopCategory) => ({
		type: ACTION_TYPE.ADD_SHOP_CATEGORY,
		payload: shopCategory
});
