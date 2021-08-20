import './Collection-preview.styles.scss';
import CollectionItem from '../Collection-item/Collection-item.component';

interface Collection {
	title: string;
	routeName: string;
	items: Array<{name: string, id: number, imageUrl: string, price: number}>;
}

const CollectionPreview:React.FC<Collection> = (props: Collection) => {
	const {title, items } = props;

	return (

		<div className="collection-preview">
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>
				{items.filter((_, idx) => idx < 4)
					.map(({id, ...others}) => (
					<CollectionItem key={id} {...others} />
				))}
			</div>
		</div>
	);
}

export default CollectionPreview;