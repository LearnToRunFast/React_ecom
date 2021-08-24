import { ACTION_TYPE } from "./actionTypes";
import {CollectionItemModel} from '../../Models/CollectionItem.model';
interface CartAction {
	type: ACTION_TYPE;
}
export const toggleCartDropdown:()=>CartAction = () => ({
		type: ACTION_TYPE.TOGGLE_CART_DROPDOWN,
});

export const addItem:(item: CollectionItemModel)=>CartAction = (item) => ({
	type: ACTION_TYPE.ADD_ITEM,
	payload: item
});

export const showCartDropdown:()=>CartAction = () => ({
	type: ACTION_TYPE.SHOW_CART_DROPDOWN,
});

