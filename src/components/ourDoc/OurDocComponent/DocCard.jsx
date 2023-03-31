import React from 'react'
import ourDocImg from '../img/ourDoc.png'
import classes from '../OurDoc.module.css'

const DocCard = () => {
    return(
        <div className={classes.our_doc_blocks}>
            <div className={classes.our_doc_block}> 
                <div className={classes.block_img}>
                    <img src={ourDocImg} alt="" />
                </div>
                <div className={classes.block_content}>
                    <h1>Андрей Андреевич</h1>
                    <div className={classes.block_desc}>
                        <div className={classes.special}>
                            <span>Хирург</span>
                        </div>
                        <div className={classes.experien}>
                            <span>Стаж: 8 лет</span>
                        </div>
                    </div>
                    <div className={classes.block_btn}>
                        <button>123</button>
                    </div>
                </div>                            
            </div>

            <div className={classes.our_doc_block}> 
                <div className={classes.block_img}>
                    <img src={ourDocImg} alt="" />
                </div>
                <div className={classes.block_content}>
                    <h1>Андрей Андреевич</h1>
                    <div className={classes.block_desc}>
                        <div className={classes.special}>
                            <span>Хирург</span>
                        </div>
                        <div className={classes.experien}>
                            <span>Стаж: 8 лет</span>
                        </div>
                    </div>
                    <div className={classes.block_btn}>
                        <button>123</button>
                    </div>
                </div>                            
            </div>

            <div className={classes.our_doc_block}> 
                <div className={classes.block_img}>
                    <img src={ourDocImg} alt="" />
                </div>
                <div className={classes.block_content}>
                    <h1>Андрей Андреевич</h1>
                    <div className={classes.block_desc}>
                        <div className={classes.special}>
                            <span>Хирург</span>
                        </div>
                        <div className={classes.experien}>
                            <span>Стаж: 8 лет</span>
                        </div>
                    </div>
                    <div className={classes.block_btn}>
                        <button>123</button>
                    </div>
                </div>                            
            </div>
        </div>     
    )
}
export default DocCard