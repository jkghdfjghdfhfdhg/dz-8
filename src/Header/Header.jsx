import React from "react";
import Logo from "./assets/logo (3).svg";
import Like from "./assets/Fav (1).svg";
import Person from "./assets/person_outline.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="header-block">
        <div className="header-logo">
          <img src={Logo} alt="" />
          <div className="header-main-menu">
            <p>Мужское</p>
            <p>Женское</p>
            <p>Унисекс</p>
            <p>Sale</p>
            <p>FAQ</p>
            <p>Безопасная сделка </p>
            <p>Правила пользование</p>
            <div className="header-like">
              <img src={Like} alt="" />
              <img src={Person} alt="" />{" "}
              <div className="header-button">
                <button>Продать</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
