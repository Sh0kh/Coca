import React from 'react'
import '../style/HomeWave.css'
function HomeWave() {
  return (
    <section className='wave'>
        <div className='container'>
           <div className='wave__wrapper'>
           <div className='wave__content'>
                <h1>
                Think beyond the wave
                </h1>
                <div className='wave__text'>
                    <div className='hero__text__lin'>

                    </div>
                    <p>
                    Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help
                     </p>
                </div>
            </div>
            <button className='wave__btn'>
             Try for free
            </button>
           </div>
        </div>
    </section>
  )
}

export default HomeWave