/* Used as starting data for Directory */
export interface ShoppingSection {
	title: string;
	imageUrl: string;
	id : number;
	linkUrl: string;
	size?:string;
}
export interface DirecotryModel {
	sections: ShoppingSection[];
}