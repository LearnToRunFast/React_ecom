
import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionPage from '../Collection/Collection.component';
import CollectionOverview from '../../Components/Collection-overview/Collection-overview.component';
const ShopPage:React.FC<RouteComponentProps> = ({match}: RouteComponentProps) => {
	return (	
		<div className="shop-page">
			<Route exact path={`${match.path}`}  component={CollectionOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	)
}


export default ShopPage;