import './Sign-in.styles.scss'
import React from "react";
import FormInput from '../Form-input/Form-input.component'
import CustomButton from '../Custom-button/Custom-button.component'
import {signInWithGoogle, signInWithEmail} from '../../firebase/firebase.utils'
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface State {
	[key: string]: string;
} 

class SignIn extends React.Component<RouteComponentProps, State> {
	constructor(props:RouteComponentProps) {
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
	handleSubmit = async () => {
		const ok = await signInWithEmail(this.state.email, this.state.password);
		if (ok) {
			this.setState({email: '', password: ''});
			this.props.history.push('/');
		}

	}

	render(): React.ReactElement {
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form>
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
							type='button' 
							onClick={this.handleSubmit} >
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
}
export default withRouter(SignIn)