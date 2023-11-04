import React from 'react'
import '../style/NewsCard.css'
function HomeNewsCard({img,text}) {
  return (
    <div className='newsCard'>
        <img src={img} alt="" />
        <p>
            {text}
        </p>
    </div>
  )
}

export default HomeNewsCard