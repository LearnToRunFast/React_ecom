

import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionPage from '../Collection/Collection.component';
import CollectionOverview from '../../Components/Collection-overview/Collection-overview.component';
import './Shop.styles.scss';
import WithSpinner from "../../Components/WithSpinner/With-spinner.component";
import {isLoadedCollections} from "../../redux/selector"
const ShopPage:React.FC<RouteComponentProps> = ({match}: RouteComponentProps) => {
	const CollectionPageWithSPinner = WithSpinner(CollectionPage);
	
	return (	
		<div className="shop-page">
			<Route exact path={`${match.path}`}  component={CollectionOverview} />
			<Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSPinner isLoading={!isLoadedCollections} {...props}/>} />
		</div>
	)
}


export default ShopPage;