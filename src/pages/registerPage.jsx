import { Link } from 'react-router';
import SignUp from '../components/SignUp'
import '../scss/_form-page.scss'

const Register = () => {
	return (
		<>
		<div className='form-page'>
		<h1>Register</h1>
		<SignUp />
		</div>

		<p>
			У вас уже есть аккаунт? <Link className='form-page__link' to="/login">Войти</Link>
		</p>
		</>
	)
}

export default Register;