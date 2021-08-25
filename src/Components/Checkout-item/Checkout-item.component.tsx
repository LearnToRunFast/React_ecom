import './Checkout-item.styles.scss';
import {CartItemModel} from '../../Models/model';
import React, { FC } from 'react';
import {useDispatch} from 'react-redux';
import {updateItemQuantity} from '../../redux/action';

interface Props {
	cartItem: CartItemModel;
}

const CheckoutItem:FC<Props> = ({cartItem}: Props) => {
	const {name, imageUrl, price, quantity} = cartItem;

	const dispatch = useDispatch();

	const clear = () => {
		cartItem.quantity = 0;
		update(cartItem);
	}
	const add = () => {
		cartItem.quantity++;
		update(cartItem);
	};

	const deduct = () => {
		cartItem.quantity--;
		update(cartItem);
	}
	const update:(newItem: CartItemModel)=> void = (newItem) => dispatch(updateItemQuantity(newItem));
	const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void  = ({target:{value}}) => {
		if (!value) {
			return;
		}
		cartItem.quantity = parseInt(value);
		update(cartItem);
	}
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt={name}/>
			</div>
			<span className="name">{name}</span>

			<div className="quantity">
				<div className='arrow' 
					onClick={deduct}
					>
					&#10094;
				</div>
				<input className="value" type="number"  onChange={handleChange} value={quantity}/>
				<div className='arrow' 
					onClick={add}
					>
					&#10095;
				</div>
			</div>

			<span className="price">{price}</span>
			<div className="remove-button" 
				onClick={clear}>
				&#10005;
			</div>
		</div>
	);
}
export default CheckoutItem;