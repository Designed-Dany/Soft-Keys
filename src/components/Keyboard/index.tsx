import React from 'react'
import { KeyboardProps } from './type'
import '/src/scss/_keyboard.scss'

function Keyboard({ title, price, imageUrl, format }: KeyboardProps) {

	return (
		<div className='keyboard'>
			<img width={200} src={imageUrl} alt="product icon" />
			<h3>{title}</h3>
			<h4>{"Размер " + format + '%'}</h4>
			<div className='keyboard__price'>
				<p>Цена: {price}$</p>
				<button>Добавить</button>
			</div>

			<svg className='keyboard__favorites' xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="red">
				<path d="M19.25 3C17.22 3 15.2716 3.81 14 5.085C12.7283 3.81 10.78 3 8.74998 3C5.15081 3 2.33331 5.415 2.33331 8.5C2.33331 12.275 6.29998 15.36 12.3083 20.035L14 21.35L15.6916 20.035C21.7 15.36 25.6666 12.275 25.6666 8.5C25.6666 5.415 22.8491 3 19.25 3ZM14.1225 18.555L14 18.65L13.8775 18.555C8.32998 14.24 4.66665 11.39 4.66665 8.5C4.66665 6.505 6.42248 5 8.74998 5C10.5466 5 12.2966 5.995 12.9091 7.36H15.085C15.7033 5.995 17.4533 5 19.25 5C21.5775 5 23.3333 6.505 23.3333 8.5C23.3333 11.39 19.67 14.24 14.1225 18.555Z" fill="red" />
			</svg>
		</div>

	)
}

export default Keyboard