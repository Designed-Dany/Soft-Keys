import React from "react";
import ButtonRoot from "../../components/ButtonRoot";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

import "/src/scss/_cart.scss";

function Cart() {
  const items = useSelector((state) => state.cart.items);

  return (
    <>
      <ButtonRoot />

      <div className="cart">
        <div>
          {items.length == 0 ? (
            <div>
              <span className="cart__empty">Корзина пуста</span>
            </div>
          ) : (
            <div>
              <div className="cart__nav">
                <h1 className="cart__title">Корзина</h1>
                <button className="cart__trash">
                  &#128465; Очистить корзину
                </button>
              </div>
              <div className="cart__items">
                {items.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>
              <div className="cart__footer">
                <span>Всего товаров: {items.length}</span>
                <span>Сумма заказа: 1999$</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
