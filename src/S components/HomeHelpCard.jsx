import React from 'react'
import '../style/HomeHelpCard.css'

function HomeHelpCard({img,title,text}) {
  return (
    <div className='homeHelpCard'>
        <img src={img} alt="" />
        <h2>
            {title}
        </h2>
        <span>
            {text}
        </span>
    </div>
  )
}

export default HomeHelpCard