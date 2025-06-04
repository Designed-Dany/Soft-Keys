import React from "react";
import ButtonRoot from "../components/ButtonRoot";
import { useSelector } from "react-redux";

function Cart() {
  const items = useSelector((state) => state.cart.items);

  return (
    <>
      <ButtonRoot />
    </>
  );
}

export default Cart;
