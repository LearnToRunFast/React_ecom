import './Header.styles.scss'

import React from "react";
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {signOut} from '../../firebase/firebase.utils'
import {getUser} from '../../redux/reducer/user.reducer';
import {useSelector} from 'react-redux';
const Header:React.FC = () => {
	const user = useSelector(getUser);
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
		</div>
	</div>
}
export default Header;