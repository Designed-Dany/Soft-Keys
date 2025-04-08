import React from 'react';
import '/src/scss/_categories.scss';
const categories = ['Все', "Популярные", "40%", '60%', '65%', '70%', '80%', '95%']

type CategoriesProps = {
	value: number;
	onChangeCategory: (i: number) => void;
}

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {

	return (
		<div className='categories'>
			<ul className='categories__list'>
				{categories.map((categoryName, i) =>
					<li onClick={() => onChangeCategory(i)} className={value === i ? "categories__active" : 'categories__item'} key={i}>{categoryName}</li>
				)}
			</ul>
		</div>
	)
}
export default Categories