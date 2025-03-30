import React from 'react'
import '/src/scss/_sort.scss'

function Sort() {
	const filters = ["Популярности", "Цене"]
	return (
		<div className='filters'>
			<img src="/src/assets/arrow.svg" alt="arrow icon" />
			<p>Сортировка по: {filters[0]}</p>
			<div>
				<ul className='filters__list'>
					{filters.map((filter, i) =>
						<li className='filters__item' key={i}>{filter}</li>
					)}
				</ul>
			</div>
		</div>
	)
}

export default Sort