import {CollectionItemModel} from './CollectionItem.model';
export interface CartItemModel extends CollectionItemModel {
	quantity: number;
}

