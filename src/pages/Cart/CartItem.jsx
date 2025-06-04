import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice";
import "/src/scss/_keyboard-cart.scss";

function CartItem({ id, imageUrl, title, price, format }) {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <div className="keyboard-cart">
        <img
          className="keyboard__icon"
          width={100}
          src={imageUrl}
          alt="product icon"
        />
        <div className="keyboard-cart__description">
          <h3>{title}</h3>
          <h4>{"Размер " + format + "%"}</h4>
        </div>
        <div className="keyboard-cart__count">
          <button>+</button>
          <span>0</span>
          <button>-</button>
        </div>
        <div className="keyboard-cart__buttons">
          <p>{price}$</p>
          <button onClick={deleteItem} className="keyboard-cart__cancel">
            &#10006;
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
