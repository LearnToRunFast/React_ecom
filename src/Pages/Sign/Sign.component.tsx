import './Sign.styles.scss'
import SignIn from '../../Components/Sign-in/Sign-in.component'
import Signup from '../../Components/Sign-up/Sign-up.component'
const SignPage:React.FC = () => (
	<div className='sign'>
		<SignIn/>
		<Signup/>
	</div>
)
export default SignPage;