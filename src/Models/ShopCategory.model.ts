
interface ShopItem {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
}

export interface ShopCategory {
	id: number;
	title: string;
	routeName: string;
	items: ShopItem[];
}
export interface ShopCategoryModel {
	categories: ShopCategory[];
}