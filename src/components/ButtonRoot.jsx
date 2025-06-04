import React from "react";
import { Link } from "react-router";
import "/src/scss/_button-root.scss";
function ButtonRoot() {
  return (
    <button className="button-root">
      <Link to="/">
        <div className="button-root__description">
          <img
            className="button-root__icon"
            width={15}
            height={15}
            src="/src/assets/arrow-back.svg"
            alt=""
          />
          Вернуться назад
        </div>
      </Link>
    </button>
  );
}

export default ButtonRoot;
