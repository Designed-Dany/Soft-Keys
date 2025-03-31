import React from 'react'
import '/src/scss/_sort.scss'
const filters = ["Популярности", "Цене"]
function Sort({ value, onChangeSort }) {
	return (
		<div className='filters'>
			<p><img src="/src/assets/arrow.svg" alt="arrow icon" /> Сортировка по: {filters[0]}</p>
			<div>
				<ul className='filters__list'>
					{filters.map((filter, i) =>
						<li onClick={() => onChangeSort(i)} className={value === i ? "filters__active" : "filters__item"} key={i}>{filter}</li>
					)}
				</ul>
			</div>
		</div>
	)
}

export default Sort