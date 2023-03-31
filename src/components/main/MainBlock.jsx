import React from 'react'
import classes from './Main.module.css'

import mainRight from "./img/mainRight.png"

const MainBlock = () => {
  return (
    <div className="wrapper">
        <div className={classes.main_block}>
            <div className={classes.container}>
                <div className={classes.main_inner}>
                    <div className={classes.main_left}>
                        <h1>Мы лечим с любовью ❤️</h1>
                        <div className={classes.main_left_text}>
                            <p>Опытные врачи <br /> Работаем по стандартам <br /> Нет лишних назначений</p>
                        </div>
                        <div className={classes.main_button}>
                            <a>Записаться</a>
                        </div>

                    </div>
                    <div className={classes.main_right}>
                        <div className={classes.main_right_img}>
                            <img src={mainRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MainBlock
