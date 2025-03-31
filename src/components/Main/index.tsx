import React from 'react'
import Categories from './Categories'
import Keyboard from './Keyboard'
import Sort from './Sort'
import '/src/scss/_main.scss'
function Main() {
	const [categoryId, setCategoryId] = React.useState(0)
	const [sortId, setSortId] = React.useState(0)
	const onChangeCategory = (id: number) => {
		setCategoryId(id)
	}
	const onChangeSort = (id: number) => {
		setSortId(id)
	}

	return (
		<>
			<div className='main'>
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<Sort value={sortId} onChangeSort={onChangeSort} />
			</div>
			<h3>Все клавиатуры</h3>
			<Keyboard />
		</>

	)
}

export default Main