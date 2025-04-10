import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import Favorites from './Favorites'
import Profile from './Profile'
import Search from './Search'
import '/src/scss/_header.scss'
function Header() {
	return (
		<header className='header'>
			<div className="container">
				<div className="header__logo">
					<Link to="/">
						<img className='header__icon' width={120} src="/src/assets/logo.svg" alt="keyboard icon" />
					</Link>
					<div className="header__description">
						<h1>SOFT KEYS</h1>
						<p>Самые красивые клавиатуры в мире <img src="/src/assets/Earth.svg" alt="" /></p>
					</div>
					<Search />
					<div className="header__navigate">
						<Favorites />
						<Link to="cart"><Cart /></Link>
						<Profile />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header