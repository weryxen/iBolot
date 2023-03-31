import React from 'react';
import classes from "./footer.module.css";
import facebook from './img/facebook.svg'
import instagram from './img/instagram.svg'
import youtube from './img/youtube.svg'
import map from './img/karta.png'

function Footer(props) {
    return (
        <div className={classes.footer}>
            <div className={classes.footer_body}>
                <div className={classes.footer_left}>
                   <div>
                       <h2>Наши контакты</h2>
                       <div className={classes.footer_number}>
                           <div>+ХХХ ХХХ ХХХ ХХХ </div>
                           <div>+ХХХ ХХХ ХХХ ХХХ </div>
                           <div>+ХХХ ХХХ ХХХ ХХХ </div>
                           <p>Office@Ibolot.kg</p>
                       </div>
                       <p>г.Бишкек, Бизнес центр Victore (4 этаж)</p>
                      <div className={classes.footer_icon1}>
                          <div className={classes.footer_icon}>
                              <img src={facebook} alt=""/>
                              <img src={instagram} alt=""/>
                              <img src={youtube} alt=""/>
                          </div>
                      </div>
                   </div>
                </div>
                <div className={classes.footer_right}>
                    <h2>Наше местонахождение</h2>
                    <img src={map} width={907} height={574} alt=""/>
                </div>
            </div>



            <div className={classes.footer_line}>
                    <div className={classes.footer_line1}>
                        <div>ГЛАВНАЯ</div>
                        <div>УСЛУГИ И ЦЕНЫ</div>
                        <div>ДОКТОРА</div>
                        <div>КОНТАКТЫ</div>
                    </div>
            </div>
        </div>
    );
}

export default Footer;