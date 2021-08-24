import React from 'react';
import './Custom-button.styles.scss'

interface Props {
	border?: string;
	color?: string;
	children: React.ReactNode;
	type?: 'submit' | 'reset' | 'button';
	height?: string;
	onClick?: () => void;
	radius?: string;
	width?: string;
	inverted?: boolean;
	isGoogleSignIn?: boolean;
}

const googleSignInClassName: (a:boolean| undefined)=>string = (isGoogleSignIn) => {
	return isGoogleSignIn ? 'google-sign-in' : ''
}

const invertedClassName: (a:boolean| undefined)=>string = (inverted) => {
	return inverted ? 'inverted' : ''
}
const CustomButton:React.FC<Props> = ({
	children,
	isGoogleSignIn,
	inverted,
	 ...otherProps}: Props) => (

	<button className={`${googleSignInClassName(isGoogleSignIn)} 
						${invertedClassName(inverted)}
						custom-button`} {...otherProps}>
		{children}
	</button>
)

export default CustomButton;