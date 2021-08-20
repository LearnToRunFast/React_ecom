import React from 'react';
import './Form-input.styles.scss'

interface Prop {
	type: string
	name: string
	value: string
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	label?: string
	required?: boolean
}

 const FormInput = ({ handleChange, label, ...otherProps }: Prop):JSX.Element => (
	 	<div className='group'>
			 <input className='form-input' onChange={handleChange} {...otherProps} />
			 {
				 label 
				 	? <div className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}{otherProps.required ? "*":null}</div>	
				 	: null
			 }
		</div>
 )

 export default FormInput;