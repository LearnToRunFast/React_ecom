import './Cart-dropdown.styles.scss';

import CustomButton from '../Custom-button/Custom-button.component';
import CartItem from '../Cart-item/Cart-item.component';
import {useSelector} from 'react-redux';
import {getCartItems} from '../../redux/selector/cart.selector';

const handleOnClick = () => {
	alert('You clicked the cart dropdown button!');
}
const CartDropdown:React.FC = () => {
	const cartItems = useSelector(getCartItems);

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{
					cartItems.length 
					? cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
					: <div className="empty-message">Your cart is empty.</div>
				}
				<CustomButton onClick={handleOnClick}> GO TO CHECKOUT </CustomButton>
			</div>
		</div>	
)}

export default CartDropdown;
