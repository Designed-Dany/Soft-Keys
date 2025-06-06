import React from "react";
import ButtonRoot from "../../components/ButtonRoot";
import CartItem from "./CartItem";

import { useSelector, useDispatch } from "react-redux";
import { clearItem } from "../../redux/slices/cartSlice";
import "/src/scss/_cart.scss";

function Cart() {
  const { products, totalPrice, count } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const clearAllCart = () => {
    dispatch(clearItem());
  };

  return (
    <>
      <ButtonRoot />

      <div className="cart">
        <div>
          {products.length == 0 ? (
            <div className="cart__empty">
              <span>Корзина пуста :(</span>
            </div>
          ) : (
            <div>
              <div className="cart__nav">
                <h1 className="cart__title">Корзина</h1>
                <button onClick={clearAllCart} className="cart__trash">
                  &#128465; Очистить корзину
                </button>
              </div>
              <div className="cart__items">
                {products.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>
              <div className="cart__footer">
                <span>Всего товаров: {products.length}</span>
                <span>Сумма заказа: {totalPrice * count}$</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
