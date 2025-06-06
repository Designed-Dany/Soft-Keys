import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/Categories";
import Keyboard from "../components/Keyboard";
import Skeleton from "../components/Skeleton";
import Sort from "../components/Sort";
import { setCategoryId, setSortId } from "../redux/slices/filterSlice";
import "/src/scss/_main.scss";

function Home() {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortId = useSelector((state) => state.filter.sort);
  const searchValue = useSelector((state) => state.search.searchValue);
  const [isLoading, setIsLoading] = React.useState(true);

  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangeSort = (id) => {
    dispatch(setSortId(id));
  };

  const [items, setItems] = React.useState([]); // надо сделать его контекстом и передать в компонент keyboard
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const sortType = sortId.sortProperty;

  const order = sortType.includes("-") ? "asc" : "desc";
  const sortBy = sortType.replace("-", "");
  const search = searchValue ? `&search=${searchValue}` : "";

  React.useEffect(() => {
    fetch(
      `https://679f328924322f8329c309b8.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortBy, order, search]);

  return (
    <>
      <div className="container">
        <div className="main">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort value={sortId} onChangeSort={onChangeSort} />
        </div>
        <h2>Все клавиатуры</h2>
        <div className="position">
          {isLoading
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : items.map((obj, i) => <Keyboard key={i} {...obj} />)}
        </div>
      </div>
    </>
  );
}

export default Home;
