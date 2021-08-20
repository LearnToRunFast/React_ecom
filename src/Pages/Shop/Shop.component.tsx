
import SHOP_DATA from './shop.data.js';
import React from 'react';
import CollectionPreview from '../../Components/Collection-preview/Collection-preview.component';

interface Item {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
}

interface Collection {
	id: number,
	title: string,
	routeName: string,
	items: Item[]
}

interface State {
	collections: Collection[]
}
class ShopPage extends React.Component<React.ReactPropTypes, State> {
	constructor(props:React.ReactPropTypes) {
		super(props);
		this.state = {
			collections:SHOP_DATA
		};
	}
	render():React.ReactNode {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{
					collections.map(({id, ...others}) => (
						<CollectionPreview key={id} {...others}/>
					))
				}
			</div>
		);
	}
}

export default ShopPage;