import './Sign-up.styles.scss';
import {useState, FC} from 'react';
import FormInput from '../Form-input/Form-input.component';
import CustomButton from '../Custom-button/Custom-button.component';

import { createUserProfileDocument, createUserWithEmail } from '../../firebase/firebase.utils';


const Signup: FC = () => {
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert('Passwords do not match');
		}

		const createdUser = await createUserWithEmail(email, password);
		if (!createdUser) return
		const userObj =  await createUserProfileDocument(createdUser.user, { displayName });
		if (!userObj) return
	}
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
		const { name, value } = event.target;
		switch (name) {
			case 'displayName':
				setDisplayName(value);
				break;
			case 'email':
				setEmail(value);
				break;
			case 'password':
				setPassword(value);
				break;
			case 'confirmPassword':
				setConfirmPassword(value);
				break;
		}
	};

    return (
		<div className='sign-up'>
		  <h2 className='title'>I do not have a account</h2>
		  <span>Sign up with your email and password</span>
		  <form className='sign-up-form' onSubmit={handleSubmit}>
			<FormInput
			  type='text'
			  name='displayName'
			  value={displayName}
			  handleChange={handleChange}
			  label='Display Name'
			  required
			/>
			<FormInput
			  type='email'
			  name='email'
			  value={email}
			  handleChange={handleChange}
			  label='Email'
			  required
			/>
			<FormInput
			  type='password'
			  name='password'
			  value={password}
			  handleChange={handleChange}
			  label='Password'
			  required
			/>
			<FormInput
			  type='password'
			  name='confirmPassword'
			  value={confirmPassword}
			  handleChange={handleChange}
			  label='Confirm Password'
			  required
			/>
			<CustomButton type='submit'>SIGN UP</CustomButton>
		  </form>
		</div>
	);
}
export default Signup;