import React from 'react'
import '/src/scss/_keyboard.scss'


function Keyboard() {
	return (
		<div className='position'>
			<div className='keyboard'>
				<img width={200} src="https://kbdfans.com/cdn/shop/files/11_721f1180-030c-4886-b1ec-35d34c23405f_460x.jpg?v=1734404658" alt="" />
				<h3>Sirius Manta</h3>
				<div className='keyboard__price'>
					<p>Цена: 180$</p>
					<button>Добавить</button>
				</div>
			</div>
		</div>

	)
}

export default Keyboard