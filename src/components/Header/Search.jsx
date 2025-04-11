import React from "react";
import { SearchContext } from "../../App";
import "/src/scss/_search.scss";

function Search() {
  const [searchValue, setSearchValue] = React.useContext(SearchContext);
  return (
    <div className="search">
      <div className="search__item">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
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
