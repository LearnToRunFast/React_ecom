import './Checkout.styles.scss'
import CheckoutItem from '../../Components/Checkout-item/Checkout-item.component';
import { FC } from 'react';
import { getCartItems, getCartTotal } from '../../redux/selector';
import {useSelector} from 'react-redux';
import StripeCheckoutButton from '../../Components/stripe-button/Stripe-button.component';

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
			
			<div className='checkout-footer'>
				<div className='test-warning'>
					*Please use the following test credit card for payments*
					<br/>
					4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
				</div>
				<span className='total'>Total: ${amount}</span>

				<StripeCheckoutButton price={amount}/>
			</div>

		</div>
	)
}

export default CheckoutPage;