import React from 'react'
import Cart from './Cart'
import Favorites from './Favorites'
import Profile from './Profile'
import Search from './Search'
import '/src/scss/_header.scss'
function Header() {
	return (
		<header className='header'>
			<div className="header__logo">
				<img className='header__icon' width={120} src="/src/assets/logo.svg" alt="keyboard icon" />
				<div className="header__description">
					<h1>SOFT KEYS</h1>
					<p>Самые красивые клавиатуры в мире <img src="/src/assets/Earth.svg" alt="" /></p>
				</div>
				<Search />
				<div className="header__navigate">
					<Favorites />
					<Cart />
					<Profile />
				</div>
			</div>
		</header>
	)
}

export default Header