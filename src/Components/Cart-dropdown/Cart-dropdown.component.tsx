import './Cart-dropdown.styles.scss';

import CustomButton from '../Custom-button/Custom-button.component';
import CartItem from '../Cart-item/Cart-item.component';
import {useSelector} from 'react-redux';
import {getCartItems} from '../../redux/selector';
import {useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {toggleCartDropdown} from '../../redux/action';
import React from 'react';

const CartDropdown:React.FC = () => {
	const history = useHistory();
	const cartItems = useSelector(getCartItems);
	const dispatch = useDispatch();
	const handleOnClick = () => {
		history.push('/checkout');
		dispatch(toggleCartDropdown());
	}
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
