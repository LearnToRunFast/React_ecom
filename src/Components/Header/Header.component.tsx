import './Header.styles.scss'

import React from "react";
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {signOut} from '../../firebase/firebase.utils'
import {getUser} from '../../redux/selector/user.selector';
import {useSelector} from 'react-redux';
import CartIcon from '../Cart-icon/Cart-icon.component';
import CartDropdown from '../Cart-dropdown/Cart-dropdown.component';
import {getCartDropdownState} from '../../redux/selector/cart.selector';

const Header:React.FC = () => {
	const user = useSelector(getUser);
	const hidden = useSelector(getCartDropdownState);
	return <div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo"/>
		</Link>

		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/contact">
				CONTACT
			</Link>

		</div>
		<div className="options">
			{
				user 
					? ( <>
							<div className="username">{user.displayName}</div>
							<div className="option" onClick={signOut}>SIGN OUT</div>
						</>
						)
					: <Link className="option" to="/sign">SIGN IN</Link>
			}
			<CartIcon/>
		</div>
		{hidden 
			? null 
			: <CartDropdown/>
		}	
	</div>
}
export default Header;