import './Collection-preview.styles.scss';
import Collection from '../Collection-item/Collection-item.component';
import {ShopCollection} from '../../Models/model';
import {useHistory,useRouteMatch } from 'react-router-dom';

const CollectionPreview:React.FC<ShopCollection> = ({title, items }: ShopCollection) => {
	const history = useHistory();
	const match = useRouteMatch();
	const handleClick = () => {
		history.push(`${match.path}/${title.toLowerCase()}`);
	}
	return (
		<div className="collection-preview">
			<h1 className='title' onClick={handleClick}>{title.toUpperCase()}</h1>
			<div className='preview'>
				{items.filter((_, idx) => idx < 4)
					.map((item) => (
					<Collection key={item.id} item={item} />
				))}
			</div>
		</div>
	);
}

export default CollectionPreview;