import React from "react";
import { useDispatch } from "react-redux";
import { removeFavorites } from "../../../redux/slices/favoriteSlice";
const FavoritesItem = ({ id, title, price, imageUrl, format }) => {
  const dispatch = useDispatch();

  const deleteFavorites = () => {
    dispatch(removeFavorites(id));
  };

  return (
    <>
      <div className="keyboard">
        <img className='keyboard__icon' width={200} src={imageUrl} alt="product icon" />
        <h3>{title}</h3>
        <h4>{"Размер " + format + "%"}</h4>
        <div className="keyboard__price">
          <p>Цена: {price}$</p>
          <div className="keyboard__buttons">
            <button className="keyboard__add">Добавить</button>
            <svg
              onClick={deleteFavorites}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="50"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                className="keyboard__cancel"
                d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM30 27.17L27.17 30L20 22.83L12.83 30L10 27.17L17.17 20L10 12.83L12.83 10L20 17.17L27.17 10L30 12.83L22.83 20L30 27.17Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoritesItem;
