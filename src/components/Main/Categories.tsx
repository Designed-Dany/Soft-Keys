import React from 'react'
import '/src/scss/_categories.scss'
function Categories() {
	const categories = ['Все', "Популярные", "40%", '60%', '65%', '70%', '80%']
	return (
		<div className='categories'>
			<ul className='categories__list'>
				{categories.map((item, i) =>
					<li className='categories__item' key={i}>{item}</li>
				)}
			</ul>
		</div>
	)
}

export default Categories