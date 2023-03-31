import React from 'react'
import classes from './OurDoc.module.css'
import DocCard from './OurDocComponent/DocCard'

const OurDoc = () => {
  return (
    <div className={classes.wrapper}>
        <div className={classes.our_doc}>
            <div className={classes.container}>
                <div className={classes.our_doc_inner}>
                    <div className={classes.our_doc_title}>
                        <h1>НАШИ ДОКТОРА</h1>
                    </div>
                    <div className={classes.our_doc_desc}>
                        <p>Наша команда состоит из квалифицированных врачей. Средний стаж работы - 15 лет.</p>
                    </div>
                    <DocCard/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurDoc
