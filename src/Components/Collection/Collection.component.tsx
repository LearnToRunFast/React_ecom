import './Collection.styles.scss';
import CustomButton from '../Custom-button/Custom-button.component';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, showCartDropdown} from '../../redux/action/cart.action';
import { isCartHidden} from '../../redux/selector/cart.selector';
import {CollectionItemModel} from '../../Models/CollectionItem.model';
interface Prop {
	item : CollectionItemModel;
}


		
const Collection:React.FC<Prop> = ({item}:Prop) => {
	const {name, price, imageUrl} = item;
	const dispatch = useDispatch();
	const hidden = useSelector(isCartHidden);
	const addItemToCart = () => {
		dispatch(addItem(item))
		if (hidden) {
			dispatch(showCartDropdown())
		}
	}
	return (
		<div className='collection'>
			<div
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`
				}}/>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton inverted onClick={addItemToCart}> Add to cart </CustomButton>
		</div>
	)
}
export default Collection;