import React from 'react';
import {SpinnerContainer,SpinnerOverlay } from './With-spinner.styles';

interface WithLoadingProps {
	isLoading: boolean;
  }
const WithSpinner: <P extends Record<string, unknown>>(Component: React.ComponentType<P>) => React.FC<P & WithLoadingProps> = <P extends Record<string, unknown>>(Component: React.ComponentType<P>) => {
	
	const Spinner:React.FC<P & WithLoadingProps> = ({isLoading, ...otherProps}: WithLoadingProps) => {
		return isLoading 
			? (
				<SpinnerOverlay>
					<SpinnerContainer />
				</SpinnerOverlay>
			) 
			: (
				<Component {...otherProps as P} />
			);
	};
	return Spinner;
};
export default WithSpinner;