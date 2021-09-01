import './Header.styles.scss'

import React from "react";
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {signOut} from '../../firebase/firebase.utils'
import {getUser} from '../../redux/selector/user.selector';
import {useSelector} from 'react-redux';
import CartIcon from '../Cart-icon/Cart-icon.component';
import CartDropdown from '../Cart-dropdown/Cart-dropdown.component';
import {getCartDropdownState} from '../../redux/selector';

const Header:React.FC = () => {
	const user = useSelector(getUser);
	const hidden = useSelector(getCartDropdownState);
	const [isOpen, setIsOpen] = React.useState(false);
	const closeMenu = () => {
		setIsOpen(false);
	}
	return <div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo"/>
		</Link>

		<div className={`${isOpen ? "active": ""} options`}>
			<Link className="option" onClick={closeMenu} to="/shop">
				SHOP
			</Link>
			<Link className="option"onClick={closeMenu} to="/contact">
				CONTACT
			</Link>

		</div>
		<div className="side-menu">
			
			<div className={`${isOpen ? "active": ""} hamburger-menu`} onClick={() => setIsOpen(!isOpen)}>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
			{
				user 
					? ( <div className="auth">
							<div className="option" onClick={signOut}>SIGN OUT</div>
							<div className="username">{user.displayName}</div>
						</div>
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