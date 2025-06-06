import React from "react";
import { useDispatch} from "react-redux";
import { removeItem, removeCount, addCount } from "../../redux/slices/cartSlice";
import "/src/scss/_keyboard-cart.scss";

function CartItem({ id, imageUrl, title, price, format, count}) {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeItem(id));
  };
  
  const minusCount = () => {
    dispatch(removeCount(id))
  }

  const plusCount = () => {
    dispatch(addCount(id))
  }

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
          <button onClick={minusCount}>-</button>
          <span>{count}</span>
          <button onClick={plusCount}>+</button>
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
