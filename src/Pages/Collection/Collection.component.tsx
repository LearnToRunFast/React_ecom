import { useParams } from 'react-router-dom';
import './Collection.styles.scss'
import {useSelector } from 'react-redux'
import {getCollection} from '../../redux/selector';
import CollectionItem from '../../Components/Collection-item/Collection-item.component';

interface RouteParams {
	collectionId: string;
}
const CollectionPage:React.FC = () => {
	const {collectionId} = useParams<RouteParams>();
	const collection = useSelector(getCollection(collectionId));
	return (
		collection 
		? <div className="collection-page">
			<h2 className='title'>{collection.title}</h2>
			<div className="items">
				{
					collection.items.map(item => (
						<CollectionItem key={item.id} item={item}/>
					))
				}
			</div>
		</div>
		: null
	)
}
export default CollectionPage;