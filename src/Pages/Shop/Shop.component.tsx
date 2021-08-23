
import SHOP_DATA from './shop.data.js';
import React from 'react';
import CollectionPreview from '../../Components/Collection-preview/Collection-preview.component';

// interface Item {
// 	id: number;
// 	name: string;
// 	price: number;
// 	imageUrl: string;
// }

// interface Collection {
// 	id: number,
// 	title: string,
// 	routeName: string,
// 	items: Item[]
// }

// interface Props {
// 	collections: Collection[]
// }
const ShopPage:React.FC = () => (
		<div className="shop-page">
		{
			SHOP_DATA.map(({id, ...others}) => (
				<CollectionPreview key={id} {...others}/>
			))
		}
	</div>
)

export default ShopPage;