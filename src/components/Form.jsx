import React from 'react';
import '../scss/_form.scss'
function Form({title, handleClick}) {
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')	
		
	return ( 
		<div className='form'>
			<input 
					placeholder='Email' 
					onChange={(e) => setEmail(e.target.value)} 
					value={email} 
					className='form__email' 
					type="email" 
				/>
				<input 
					placeholder='Пароль' 
					onChange={(e) => setPassword(e.target.value)} 
					value={password} 
					className='form__password' 
					type="password" 
				/>
				<button className='form__button'
					onClick={() => handleClick(email, password)}>
						{title}
				</button>
		</div>
	)
}

export default Form;