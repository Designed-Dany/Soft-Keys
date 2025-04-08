import React from 'react';
import '/src/scss/_sort.scss';
const filters = ["Популярности", "Цене"]
function Sort({ value, onChangeSort }) {

	const [open, setOpen] = React.useState(false);
	const sortName = filters[value];
	return (
		<div className='filters'>
			<div className="filters__position">
				<img src="/src/assets/arrow.svg" alt="arrow icon" />
				<b>Сортировка по:</b>
				<span className='filters__name' onClick={() => setOpen(!open)}>{sortName}</span>
			</div>
			<div>
				{open && <ul className='filters__list'>
					{filters.map((filter, i) =>
						<li onClick={() => (onChangeSort(i), setOpen(false))} className={value === i ? "filters__active" : "filters__item"} key={i}>{filter}</li>
					)}
				</ul>}
			</div>
		</div>
	)
}

export default Sort