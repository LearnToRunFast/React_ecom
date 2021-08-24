import {CartItemModel} from './CartItem.model';
import {UserModel} from './User.model';

export interface ReduxStateModel {
	cart: {
		hidden: boolean,
		cartItems: CartItemModel[]
	},
	user: {
		user: UserModel
	} | null
}