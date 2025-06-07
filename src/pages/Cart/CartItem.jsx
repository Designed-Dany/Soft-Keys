import React from "react";
import { useDispatch} from "react-redux";
import { removeItem, plusCount, minusCount } from "../../redux/slices/cartSlice";
import "/src/scss/_keyboard-cart.scss";

function CartItem({ id, imageUrl, title, price, format, count}) {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeItem(id));
  };
  
  const minusCounts = () => {
    dispatch(minusCount(id))
  }

  const plusCounts = () => {
    dispatch(plusCount(id))
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
          <button onClick={minusCounts}>-</button>
          <span>{count}</span>
          <button onClick={plusCounts}>+</button>
        </div>
        <div className="keyboard-cart__buttons">
          <p>{price * count}$</p>
          <button onClick={deleteItem} className="keyboard-cart__cancel">
            &#10006;
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
