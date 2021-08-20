import './Sign-in.styles.scss'
import React from 'react'
import FormInput from '../Form-input/Form-input.component'
import CustomButton from '../Custom-button/Custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'

interface State {
	[key: string]: string;
} 
    
class SignIn extends React.Component<Record<string,never>, State> {
	constructor(props:Record<string,never>) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
		const { name, value } = e.target
		this.setState({[name]: value})
	}
	handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
		event.preventDefault();
		this.setState({email: '', password: ''});
	}

	render(): React.ReactElement {
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput 
						type="email" 
						name="email"
						label="Email"
						value={this.state.email} 
						handleChange={this.handleChange}
						required 
					/>
					<FormInput 
						type="password" 
						name="password"
						label="Password"
						value={this.state.password} 
						handleChange={this.handleChange} 
						required 
					/>
					<div className="buttons">
						<CustomButton 
							type='submit'>
								Sign In
						</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}

}
export default SignIn