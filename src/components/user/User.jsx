import React from "react";
import { Link } from "react-router-dom";

import style from "./user.module.css";
import email from "./img/email.svg";
import calendar from "./img/calendar.svg";
import data from "./img/calendar.svg";
import map from "./img/map.svg";
import men from "./img/men.svg";
import phone from "./img/phone.svg";

const User = () => {
  return (
    <div className={style.user}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Мой профиль</h2>
        </div>
        <div className={style.all_items}>
          <div className={style.right}>
            <div className={style.item}>
              <div className={style.text}>
                <h2>ФИО</h2>
                <p>Османов Уран Шералиевич</p>
              </div>
              <div className={style.icon}>
                <img src={men} alt="icon" />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.text}>
                <h2>Почта</h2>
                <p>uranosmanov28@gmail.com </p>
              </div>
              <div className={style.icon}>
                <img src={email} alt="icon" />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.text}>
                <h2>Дата рождения</h2>
                <p>28.09.2004</p>
              </div>
              <div className={style.icon}>
                <img src={calendar} alt="icon" />
              </div>
            </div>
          </div>
          <div className={style.left}>
            <div className={style.item}>
              <div className={style.text}>
                <h2>Город</h2>
                <p>Кыргызстан, г.Бишкек</p>
              </div>
              <div className={style.icon}>
                <img src={map} alt="icon" />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.text}>
                <h2>Лечусь</h2>
                <p>11 месяцев </p>
              </div>
              <div className={style.icon}>
                <img src={data} alt="icon" />
              </div>
            </div>
            <div className={style.item}>
              <div className={style.text}>
                <h2>Номер телефона</h2>
                <p>+996 555-00-07-77</p>
              </div>
              <div className={style.icon}>
                <img src={phone} alt="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="button_container">
          <div>
            <span></span>
          </div>
          <button>Изменить</button>
        </div>
      </div>
    </div>
  );
};

export default User;
