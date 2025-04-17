import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/searchSlice";
import "/src/scss/_search.scss";
function Search() {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();

  return (
    <div className="search">
      <div className="search__item">
        <input
          value={searchValue}
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
          className="search__input"
          type="text"
          placeholder="поиск лучшей клавиатуры..."
        />
        <div className="search__block">
          <img
            className="search__icon"
            width={20}
            src="/src/assets/search.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
