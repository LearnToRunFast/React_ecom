import './Collection-item.styles.scss';
interface Prop {
	name: string
	price: number
	imageUrl: string
}
const CollectionItem:React.FC<Prop> = (props: Prop) => {
	const { name, price, imageUrl } = props;
	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`
				}}/>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
		</div>
	)
}
export default CollectionItem;