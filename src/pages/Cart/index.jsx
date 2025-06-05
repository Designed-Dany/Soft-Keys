import React from "react";
import ButtonRoot from "../../components/ButtonRoot";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

import "/src/scss/_cart.scss";

function Cart() {
  const {products} = useSelector((state) => state.cart);
  const {totalPrice} = useSelector((state) => state.cart)
  return (
    <>
      <ButtonRoot />

      <div className="cart">
        <div>
          {products.length == 0 ? (
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
                {products.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>
              <div className="cart__footer">
                <span>Всего товаров: {products.length}</span>
                <span>Сумма заказа: {totalPrice}$</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
