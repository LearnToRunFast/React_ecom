import './Cart-icon.styles.scss';

import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {useDispatch, useSelector} from 'react-redux';
import {toggleCartDropdown } from '../../redux/action/cart.action';
import {getCartItemCount} from '../../redux/selector/cart.selector';


const CartIcon:React.FC = () => {
	const dispatch = useDispatch();
	const itemCount = useSelector(getCartItemCount);
	
	return (
		<div className="cart-icon" onClick={()=> dispatch(toggleCartDropdown())}>
			<ShoppingIcon className="shopping-icon" />
			<span className='item-count'>{itemCount}</span>
		</div>
	);
};
export default CartIcon;