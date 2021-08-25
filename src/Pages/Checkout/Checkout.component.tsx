import './Checkout.styles.scss'
import CheckoutItem from '../../Components/Checkout-item/Checkout-item.component';
import { FC } from 'react';
import { getCartItems, getCartTotal } from '../../redux/selector';
import {useSelector} from 'react-redux';

const CheckoutPage:FC = () => {
	const items = useSelector(getCartItems)
	const amount = useSelector(getCartTotal)
	return (
		<div className="checkout-page">
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			<div className='checkout-body'>
				{
					items.map(item =>(
						<CheckoutItem cartItem={item} key={item.id}/>
					))
				}
			</div>
			<div className='checkout-footer'>total: ${amount}</div>
		</div>
	)
}

export default CheckoutPage;