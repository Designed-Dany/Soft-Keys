import React from "react";
import Categories from "./Categories";
import Keyboard from "./Keyboard";
import Sort from "./Sort";
import "/src/scss/_main.scss";
function Main() {
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
				{items.map((obj: any) => (
					<Keyboard
						imageUrl={obj.imageUrl}
						price={obj.price}
						title={obj.title}
						format={obj.format}
						key={obj.id}
						{...obj}
					/>
				))}
			</div>
		</>
	);
}

export default Main;
