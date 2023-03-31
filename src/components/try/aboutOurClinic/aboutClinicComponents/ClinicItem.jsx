import React from "react";
import classes from "./clinicItem.module.css";

const ClinicItem = (props) => {
  return (
    <div className={classes.clinicItem}>
      <div className={classes.item}>
        <hr className={classes.hr} />
        <div className={classes.item_icon}>
          <img src={props.image} alt="image" />
        </div>
        <div className={classes.item_text}>
          <h2>{props.h2}</h2>
          <p>{props.p}</p>
        </div>
      </div>
    </div>
  );
};

export default ClinicItem;
