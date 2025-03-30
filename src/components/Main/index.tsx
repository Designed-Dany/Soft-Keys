import React from 'react'
import Categories from './Categories'
import Keyboard from './Keyboard'
import Sort from './Sort'
import '/src/scss/_main.scss'
function Main() {
	return (
		<>
			<div className='main'>
				<Categories />
				<Sort />

			</div>
			<h3>Все клавиатуры</h3>
			<Keyboard />
		</>

	)
}

export default Main