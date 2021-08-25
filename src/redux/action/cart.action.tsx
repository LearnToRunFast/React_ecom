import { ACTION_TYPE } from "./actionTypes";
import {CollectionItemModel} from '../../Models/model';
import {AnyAction} from "redux";

export const toggleCartDropdown:()=>AnyAction = () => ({
		type: ACTION_TYPE.TOGGLE_CART_DROPDOWN,
});

export const addItem:(item: CollectionItemModel)=>AnyAction = (item) => ({
	type: ACTION_TYPE.ADD_ITEM,
	payload: item
});

export const showCartDropdown:()=>AnyAction = () => ({
	type: ACTION_TYPE.SHOW_CART_DROPDOWN,
});

export const updateItemQuantity:(item: CollectionItemModel)=>AnyAction = (item) => ({
	type: ACTION_TYPE.UPDATE_QUANTITY,
	payload: item
});