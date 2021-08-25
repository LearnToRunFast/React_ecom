import './Cart-item.styles.scss';
import {CartItemModel} from '../../Models/model'

interface Prop {
	item: CartItemModel
}
const CartItem:React.FC<Prop> = ({item:{imageUrl, price, name, quantity}}: Prop) => {
	return (
		<div className="cart-item">
			<img src={imageUrl} alt={name} />
			<div className="item-info">
				<span className='name'>{name}</span>
				<span className='price'>{quantity} x {price}</span>
			</div>
		</div>
	)
}

export default CartItem;