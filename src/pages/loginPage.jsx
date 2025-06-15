import React from 'react'
import { Link } from 'react-router'
import Login from '../components/Login'
import '../scss/_form-page.scss'

const loginPage = () => {
	return (
		<div className='form-page'>
			<h1>Login</h1>
			<Login className="form-page__button"/>
		<p>
			У вас нету аккаунта?  <br />
			<Link className='form-page__link' to="/register">Зарегистрироваться</Link>
		</p>
		</div>
	)
}

export default loginPage;
