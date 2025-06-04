import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./Search";
import "/src/scss/_header.scss";

function Header() {
  const { items } = useSelector((state) => state.favorites);

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img
              className="header__icon"
              width={120}
              src="/src/assets/logo.svg"
              alt="keyboard icon"
            />
          </Link>
          <div className="header__description">
            <h1>SOFT KEYS</h1>
            <p>
              Самые красивые клавиатуры в мире{" "}
              <img src="/src/assets/Earth.svg" alt="" />
            </p>
          </div>
          <Search />
          <div className="header__navigate">
            <Link to="favorites">
              <span className="header__favorites">{items.length}</span>
              <img
                width={35}
                src="/src/assets/favorites.svg"
                alt="favorites icon"
              />
            </Link>
            <Link to="cart">
              <img width={35} src="/src/assets/cart.svg" alt="" />
            </Link>
            <img width={28} src="/src/assets/profile.svg" alt="profile icon" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
