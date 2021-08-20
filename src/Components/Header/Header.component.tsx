import './Header.styles.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
interface Props {
	currUser: any
}
const Header:React.FC<Props> = ({currUser}: Props) => (
	<div className="header">
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
			{
				currUser 
					? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
					: <Link className="option" to="/sign">SIGN IN</Link>
			}
		</div> 
	</div>
)
export default Header;