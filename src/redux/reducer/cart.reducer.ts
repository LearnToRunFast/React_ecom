
import {ACTION_TYPE} from "../action/actionTypes";
import { AnyAction } from 'redux'
import {CartItemModel} from '../../Models/CartItem.model';

const INIT_STATE = {
	hidden: true,
	cartItems:[]
}

interface ReducerState {
	hidden: boolean,
	cartItems: CartItemModel[]
}
const addCartItem:(cartItems: CartItemModel[], item: CartItemModel)=> CartItemModel[] = (cartItems, item) => {
	for (let i = 0; i < cartItems.length; i++) {
		if (cartItems[i].id === item.id) {
			const newItem:CartItemModel = {...cartItems[i]};
			newItem.quantity = newItem.quantity + 1;
			cartItems[i] = newItem;
			return [...cartItems];
		}
	}
	const newItem:CartItemModel = {...item, quantity: 1};
	return [...cartItems, newItem];
}
export const cartReducer:(state:ReducerState,action: AnyAction) => ReducerState = (state: ReducerState = INIT_STATE, action:AnyAction) => {
	switch(action.type) {
		case ACTION_TYPE.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				hidden: !state.hidden
			}
		case ACTION_TYPE.ADD_ITEM:
			return {
				...state,
				cartItems: addCartItem(state.cartItems, action.payload)
			}
		case ACTION_TYPE.SHOW_CART_DROPDOWN:
			return {
				...state,
				hidden: false
			}
		default:
			return state
	}
}


