
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
	collections?: ShopCollections,
	isFetchingCollections: boolean,
	errorMessage: string
}
export interface ShopCollections {
	[key: string]: ShopCollection
}