import React from "react";
import { Link } from "react-router";
import "/src/scss/_button-root.scss";
function ButtonRoot() {
  return (
    <Link to="/">
      <button className="button-root">
        <img width={20} height={20} src="/src/assets/arrow-back.svg" alt="" />
        Вернуться назад{" "}
      </button>
    </Link>
  );
}

export default ButtonRoot;
