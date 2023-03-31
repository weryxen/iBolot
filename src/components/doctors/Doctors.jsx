import React from 'react'
import classes from './Doctors.module.css'
import DoctorCard from './doctorsComponent/DoctorCard'

const Doctors = () => {
  return (
    <div className={classes.doctors} id="doctor">
      <div className={classes.container}>
        <h1>Наши доктора</h1>
        <DoctorCard/>
      </div>
    </div>
  )
}

export default Doctors
