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
				? collections.map(({id, ...otherCollectionProps}) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))
				: null
			}
		</div>
	)
}
export default CollectionOverview;