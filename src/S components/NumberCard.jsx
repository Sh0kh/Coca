import React from 'react'
import '../style/NumberCard.css'
function NumberCard({Number,text}) {
  return (
    <div className='NumberCard'>
        <h1>
            {Number}
        </h1>
        <p>
            {text}
        </p>
    </div>
  )
}

export default NumberCard