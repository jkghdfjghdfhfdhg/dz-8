import React from "react";
import WK from "./assets/vk 1 (1).svg";
import Inst from "./assets/instagram 1 (1).svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main-text1">
        <p>Категории</p>
        <div className="footer-text1">
          <p>Мужское</p>
          <p> Женское</p>
          <p>Унисекс</p>
          <div className="footer-main-text2">
            <p>О нас</p>
            <div className="footer-text2">
              <p>Kомпании</p>
              <p>Контакты</p>
              <p>FAQ</p>
              <div className="footer-main-text3">
                <p>Мой аккаунт</p>
                <div className="footer-text3">
                  <p>Заказы</p>
                  <p>Список желаний</p>
                  <p>Войти</p>
                  <div className="footer-main-text4">
                    <p>Сервис</p>
                    <div className="footer-text4">
                      <p>Безопасная сделка</p>
                      <p>Правила оказания услуг</p>
                      <p>Блог</p>
                      <div className="footer-number">
                        <p>+7 (910) 588-44-55</p>
                        <div className="footer-email">
                          <p>duffs@mail.ru</p>
                          <div className="footer-blog">
                            <img src={WK} alt="" />
                            <div className="footer-blog2">
                              <img src={Inst} alt="" />
                              <div className="footer-down-text">
                                <p>
                                  Пользовательское соглашение и политика
                                  конфиденциальности
                                </p>
                                <div className="footer-opis">
                                  <p>©CLOZA 2021. Все права защищены</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
