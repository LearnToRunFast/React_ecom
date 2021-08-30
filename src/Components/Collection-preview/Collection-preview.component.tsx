import './Collection-preview.styles.scss';
import Collection from '../Collection-item/Collection-item.component';
import {ShopCollection} from '../../Models/model';
import { RouteComponentProps,withRouter } from 'react-router-dom';

const CollectionPreview:React.FC<ShopCollection & RouteComponentProps> = ({title, items, match, history }: ShopCollection & RouteComponentProps) => {

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

export default withRouter(CollectionPreview);