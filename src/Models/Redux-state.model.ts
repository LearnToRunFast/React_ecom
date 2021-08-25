import {UserModel, CartModel, ShopCategoryModel, DirecotryModel} from './model';
export interface ReduxStateModel {
	cart: CartModel,
	user: UserModel,
	directory:DirecotryModel,
	shop: ShopCategoryModel
}