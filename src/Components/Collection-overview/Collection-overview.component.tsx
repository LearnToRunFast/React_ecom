import './Collection.overview.styles.scss';
import {useSelector} from 'react-redux';
import {getCollections} from '../../redux/selector';
import CollectionPreview from '../Collection-preview/Collection-preview.component';
	
const CollectionOverview:React.FC = () => {
	const collections= useSelector(getCollections)
	return (
		<div className="collection-overview">
			{
				collections 
				? Object.entries(collections).map(([_, collection]) => (
					<CollectionPreview key={collection.id} {...collection} />
				))
				: null
			}
		</div>
	)
}
export default CollectionOverview;