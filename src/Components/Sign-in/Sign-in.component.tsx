import './Sign-in.styles.scss'
import React from "react";
import FormInput from '../Form-input/Form-input.component'
import CustomButton from '../Custom-button/Custom-button.component'
import {signInWithGoogle, signInWithEmail} from '../../firebase/firebase.utils'

const SignIn:React.FC = () => {
	const [email, setEmail] = React.useState<string>("");
	const [password, setPassword] = React.useState<string>("");

	const handleChange:({target:{ name, value}}:React.ChangeEvent<HTMLInputElement>) => void = ({target:{ name, value}}) => {
		switch (name) {
			case "email":
				setEmail(value);
				break;
			case "password":
				setPassword(value);
				break;
			default:
				console.error("Unknown input for set state in sign in", name);
		}

	}

	const handleSubmit:()=> void = async () => {
		const ok = await signInWithEmail(email, password);
		if (ok) {
			setEmail("");
			setPassword("");
		}

	}

	return (
		<div className="sign-in">
			<h2 className="title">I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form>
				<FormInput 
					type="email" 
					name="email"
					label="Email"
					value={email} 
					handleChange={handleChange}
					required 
				/>
				<FormInput 
					type="password" 
					name="password"
					label="Password"
					value={password} 
					handleChange={handleChange} 
					required 
				/>
				<div className="buttons">
					<CustomButton 
						type='button' 
						onClick={handleSubmit} >
							Sign In
					</CustomButton>
					<CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	)
}
export default SignIn