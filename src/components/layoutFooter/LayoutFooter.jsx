import React from 'react'
import classes from './layoutFooter.module.css'

const layoutFooter = () => {
  return (
    <div className={classes.layout_footer}>
        <div className={classes.footer_blocks}>
            <div className={classes.footer_info_blocks}>

                <div className={classes.footer_location}>
                    <h1>Локация</h1>
                    <div className={classes.location_name}>
                        <ul>
                            <li>г.Бишкек, Бизнес центр Victore (4 этаж)</li>
                            <li>г.Бишкек, Бизнес центр Victore (4 этаж)</li>
                            <li>г.Бишкек, Бизнес центр Victore (4 этаж)</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.footer_info}>
                    <h1>Информация</h1>
                    <div className={classes.info_name}>
                        <ul>
                            <li>Медия</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.footer_logo}>
                <span>IBOLOT <br /> DENTAL</span>
                <div className={classes.social}>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default layoutFooter
