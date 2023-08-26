import React from 'react'
import "./Card.css"
import Image from "./hosteldemoimg.jpg";

const CardComponent = () => {
  const hostelName="Narayana Hostels";
  const hostelDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatem doloremque facilis tempora voluptas aspernatur, sunt voluptatum magnam tempore enim, commodi dolorem minus inventore praesentium optio ab nobis quibusdam eveniet nulla reiciendis? Neque saepe magnam consectetur, reiciendis dolor repellat"
  const hostelPrice=20000;
  return (
    <div className='parent'>
    <div className='card-div-dekstop'>
        <div className='img-container'>
            <img src={Image} />
        </div>
        <div className='left-container'>
          <div className='upper-para'>
            <span className='hostel-name'>{hostelName}</span>&nbsp;{hostelDescription}
          </div>
          <div className='lower-buttons'>
            <div className='price-container'>
              <span className='starting-text'>Starting From</span><br/><span className='price'>₹{hostelPrice}</span><span className='starting-text'>/month</span>
            </div>
            
              <div>
              <button className="btn1">Contact</button>
              </div>
              <div>
              <button className="btn2">Learn More</button>
      
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default CardComponent
