import './Collection-preview.styles.scss';
import Collection from '../Collection/Collection.component';
import {CollectionItemModel} from '../../Models/model'; 
interface Prop {
	title: string;
	routeName: string;
	items: CollectionItemModel[];
}

const CollectionPreview:React.FC<Prop> = ({title, items }: Prop) => {
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