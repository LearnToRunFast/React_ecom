

import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionPage from '../Collection/Collection.component';
import CollectionOverview from '../../Components/Collection-overview/Collection-overview.component';
import './Shop.styles.scss';
import {useState} from 'react';
import WithSpinner from "../../Components/WithSpinner/With-spinner.component";
const ShopPage:React.FC<RouteComponentProps> = ({match}: RouteComponentProps) => {
	const [isLoading, setIsLoading] = useState(true); // simulate loading
	const CollectionPageWithSPinner = WithSpinner(CollectionPage);
	setTimeout(() => {
		setIsLoading(false)
	}
	,3000);
	
	return (	
		<div className="shop-page">
			<Route exact path={`${match.path}`}  component={CollectionOverview} />
			<Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSPinner isLoading={isLoading} {...props}/>} />
		</div>
	)
}


export default ShopPage;