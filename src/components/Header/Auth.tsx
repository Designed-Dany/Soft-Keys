import React from 'react'
import { toast } from 'react-toastify'
import { AuthService } from '../../services/auth.service'
import '/src/scss/_auth.scss'

function Auth() {
	const [isLogin, setIsLogin] = React.useState<boolean>(false)
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')

	const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			const data = await AuthService.registration({ email, password })
			if (data) {
				toast.success("Account has been created.")
				setIsLogin(!isLogin)
			}
		} catch (err: any) {
			const error = err.response?.data.message
			toast.error(err.toString())
		}
	}

	const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		try {

		} catch (err) {
			const error = err.response?.data.message
			toast.error(err.toString())
		}
	}
	return (
		<div className='form__block'>
			<h1>
				{isLogin ? "Login" : "Registration"}
			</h1>

			<form onSubmit={isLogin ? loginHandler : registrationHandler} className='form'>
				<input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Email' />

				<input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Пароль' />
				<button type='submit'>{isLogin ? "Login" : "Register"}</button>
			</form>

			<div className='questions-block'>
				{isLogin ? (<button onClick={() => setIsLogin(!isLogin)}>У вас нету учетной записи?</button>) : (<button onClick={() => setIsLogin(!isLogin)}>У вас уже есть аккаунт?</button>)}
			</div>
		</div>
	)
}

export default Auth