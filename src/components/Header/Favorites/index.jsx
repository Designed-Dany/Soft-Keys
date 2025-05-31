import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonRoot from "../../ButtonRoot";
import FavoritesItem from "./FavoritesItem";
import "/src/scss/_favorites.scss";
function Favorites() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.favorites.items);

  return (
    <>
      <ButtonRoot />
      <div className="favorites">
        {items.length == 0 ? <span className='favorites__empty'>Пока в избранном ничего нет :(</span> : items.map((item) => (
          <FavoritesItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default Favorites;
