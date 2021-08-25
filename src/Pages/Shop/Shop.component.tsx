
import React from 'react';
import CollectionPreview from '../../Components/Collection-preview/Collection-preview.component';
import { getCategories } from '../../redux/selector';
import {useSelector} from 'react-redux';

const ShopPage:React.FC = () => {
	const categories = useSelector(getCategories)
	return (	
		<div className="shop-page">
			{
				categories.map(({id, ...others}) => (
					<CollectionPreview key={id} {...others}/>
				))
			}
		</div>
	)
}


export default ShopPage;