import {UserModel, CartModel, ShopCollectionModel, DirecotryModel} from './model';
export interface ReduxStateModel {
	cart: CartModel,
	user: UserModel,
	directory:DirecotryModel,
	shop: ShopCollectionModel
}