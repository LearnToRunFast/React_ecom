
interface ShopItem {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
}

export interface ShopCollection {
	id?: number;
	title: string;
	routeName: string;
	items: ShopItem[];
}
export interface ShopCollectionModel {
	collections: ShopCollection[];
}