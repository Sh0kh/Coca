import React from 'react'
import '../style/MeetCard.css'
import meet1 from '../Images/meet1.png'
import meet2 from '../Images/meet2.png'
import meet3 from '../Images/meet3.png'
function MeetCard({img,title,text}) {
  return (
    <div className='meetCard'>
        <img className='person' src={img} alt="" />
        <div className='card__wrapper'>
            <h2>
                {title}
            </h2>
            <div>
            <img src={meet1} alt="" />
            <img src={meet2} alt="" />
            <img src={meet3} alt="" />
            </div>
        </div>
        <p>
            {text}
        </p>
    </div>
  )
}

export default MeetCard