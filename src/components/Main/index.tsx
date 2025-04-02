import React from "react";
import Categories from "./Categories";
import Keyboard from './Keyboard';
import Skeleton from "./skeleton";
import Sort from "./Sort";
import "/src/scss/_main.scss";
function Main() {
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
				setIsLoading(false)
			});
	}, []);

	return (
		<>
			<div className="main">
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<Sort value={sortId} onChangeSort={onChangeSort} />
			</div>
			<h3>Все клавиатуры</h3>
			<div className="position">
				{isLoading ? [...new Array(6)].map((_, i) => <Skeleton key={i} />) : items.map((obj) => (
					<Keyboard
						imageUrl={obj.imageUrl}
						price={obj.price}
						title={obj.title}
						format={obj.format}
						key={obj.id}
						{...obj}
					/>
				))
				}
			</div>
		</>
	);
}

export default Main;
