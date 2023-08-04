import React from "react";
import Poisk from "./assets/search 1 (1).svg";
const Search = () => {
  return (
    <div className="search">
      <div className="search-block">
        <div className="search-main-img">
          <img src={Poisk} alt="" />
          <div className="search-main-text">
            <p>
              Поиск товара, бренда или продавца...Поиск товара, бренда или
              продавца...Поиск товара, бренда или продавца...Поиск товара,
              бренда или продавца...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
