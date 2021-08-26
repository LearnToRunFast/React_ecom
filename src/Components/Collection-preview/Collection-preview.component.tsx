import './Collection-preview.styles.scss';
import Collection from '../Collection-item/Collection-item.component';
import {ShopCollection} from '../../Models/model';


const CollectionPreview:React.FC<ShopCollection> = ({title, items }: ShopCollection) => {
	return (

		<div className="collection-preview">
			<h1 className='title'>{title.toUpperCase()}</h1>
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