import React from 'react'
import '../style/AnalyzCard.css'
function HomeAnalyzCard({img,title,text}) {
  return (
    <div className='anlyzCard'>
        <img src={img} alt="" />
        <div>
            <h2>
                {title}
            </h2>
            <p>
                {text}
            </p>
        </div>
    </div>
  )
}

export default HomeAnalyzCard