import {ReduxStateModel} from '../../Models/model';
import {createSelector} from 'reselect';

const selector = (state: ReduxStateModel) => state.cart;

export const getCartItems = createSelector(selector, (cart) => cart.cartItems);

export const getCartDropdownState = createSelector(selector, (cart) => cart.hidden);


export const getCartItemCount = createSelector(getCartItems, (cartItems) => {
	return cartItems.reduce((count, item) => count + item.quantity, 0)
});

export const isCartHidden = createSelector(getCartDropdownState, (hidden) => {
	return hidden;
});

export const getCartTotal = createSelector(getCartItems, (cartItems) => {
	return cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
});