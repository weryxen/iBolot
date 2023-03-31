import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./userReg.module.css";
import { regUser } from "../../store/Slices/userRegSlice";

const UserReg = () => {

  const dispatch = useDispatch();

  const [state, setState] = useState({
    firstname: "",
    email: "",
    password: "",
    country: "",
    lastname: "",
    phone: "",
    confirm: "",
    city: "",
  });



  const registerFunk = () => {
    dispatch(regUser(state));
  };
  const getUserInfo = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2>Мой профиль</h2>
      </div>
      <div class={style.inputs_container}>
        <div class={style.left_column}>
          <div class={style.input}>
            <p>First name</p>
            <input
              type="text"
              placeholder="Uran"
              name="firstname"
              onChange={getUserInfo}
            />
          </div>
          <div class={style.input}>
            <p>Email</p>
            <input
              type="email"
              placeholder="uranosmanov28@gmail.com"
              name="email"
              onChange={getUserInfo}
            />
          </div>
          <div class={style.input}>
            <p>New password</p>
            <input
              type="password"
              placeholder="301228"
              name="password"
              onChange={getUserInfo}
            />
          </div>
          <div class={style.input}>
            <p>Country</p>
            <input
              type="text"
              placeholder="Kyrgyzstan"
              name="country"
              onChange={getUserInfo}
            />
          </div>
        </div>
        <div class={style.right_column}>
          <div class={style.input}>
            <p>Last name</p>
            <input
              type="text"
              placeholder="Osmanov"
              name="lastname"
              onChange={getUserInfo}
            />
          </div>
          <div class={style.input}>
            <p>Phone</p>
            <input
              type="number"
              placeholder="+996 555 69-75-69"
              name="phone"
              onChange={getUserInfo}
            />
          </div>
          <div class={style.input}>
            <p>Confirm</p>
            <input
              type="number"
              placeholder="301228"
              name="confirm"
              onChange={getUserInfo}
            />
          </div>
          <div class={style.input}>
            <p>City</p>
            <input
              type="text"
              placeholder="Bishkek"
              name="city"
              onChange={getUserInfo}
            />
          </div>
        </div>
      </div>
      <div className="button_container">
        <div>
          <span></span>
        </div>
        <button onClick={registerFunk}>Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default UserReg;
