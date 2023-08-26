import React from 'react'
import CardComponent from '../../components/Card/CardComponent'
import "./besthostelpage.css";
const BestHostel = () => {
  return (
    <div className='parent-div'>
      <div className='img-div'>
        <img src="assets/images/building.jpg"/>
      </div>
      <div>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
      </div>
    </div>
  )
}

export default BestHostel
