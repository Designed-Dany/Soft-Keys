import React from "react";
import "/src/scss/_sort.scss";
const filters = [
  { name: "Популярности", sortProperty: "rating" },
  { name: "Цене", sortProperty: "price" },
];
function Sort({ value, onChangeSort }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="filters">
      <div className="filters__position">
        <img src="/src/assets/arrow.svg" alt="arrow icon" />
        <b>Сортировка по:</b>
        <span className="filters__name" onClick={() => setOpen(!open)}>
          {value.name}
        </span>
      </div>
      <div>
        {open && (
          <ul className="filters__list">
            {filters.map((obj, i) => (
              <li
                onClick={() => (onChangeSort(obj), setOpen(false))}
                className={value === i ? "filters__active" : "filters__item"}
                key={i}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Sort;
