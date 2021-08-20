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
	isGoogleSignIn?: boolean;
}
const CustomButton:React.FC<Props> = ({children,isGoogleSignIn, ...otherProps}: Props) => (
	<button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
		{children}
	</button>
)

export default CustomButton;