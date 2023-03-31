import React from "react";
import User from "../../components/user/User";
import style from "./userInfo.module.css";

const UserInfo = () => {
  return (
    <div className={style.page}>
      <div className={style.userInfo}>
        <User />
      </div>
    </div>
  );
};

export default UserInfo;
