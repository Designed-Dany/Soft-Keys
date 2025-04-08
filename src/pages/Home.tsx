import React from 'react';

import Categories from '../components/Categories';
import Keyboard from '../components/Keyboard';
import { KeyboardProps } from '../components/Keyboard/type';
import Skeleton from '../components/Skeleton';
import Sort from '../components/Sort';

import '/src/scss/_main.scss';

function Home() {
	const [isLoading, setIsLoading] = React.useState(true);
	const [categoryId, setCategoryId] = React.useState(0);
	const [sortId, setSortId] = React.useState(0);
	const onChangeCategory = (id: number) => {
		setCategoryId(id);
	};
	const onChangeSort = (id: number) => {
		setSortId(id);
	};

	const [items, setItems] = React.useState([]);

	React.useEffect(() => {
		fetch("https://679f328924322f8329c309b8.mockapi.io/items")
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			<div className='container'>
				<div className="main">
					<Categories value={categoryId} onChangeCategory={onChangeCategory} />
					<Sort value={sortId} onChangeSort={onChangeSort} />
				</div>
				<h3>Все клавиатуры</h3>
				<div className="position">
					{isLoading
						? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
						: items.map((obj: KeyboardProps) => <Keyboard {...obj} />)}
				</div>
			</div>

		</>
	);
}

export default Home