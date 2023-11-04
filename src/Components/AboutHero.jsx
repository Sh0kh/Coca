import React from 'react'
import '../style/AboutHero.css'
import aboutHero1 from '../Images/AboutHero_1.png'
function AboutHero() {
  return (
    <section className='AboutHero'>
        <div className='container'>
            <h1>
            Everything you need to get the attention of your audience
            </h1>
            <div className='aboutHero__wrapper'>
                <div className='lin__text'>
                <div className='lin'>
                    
                    </div>
                    <p>
                    Our digital agency helps clients develop, implement and maintain successful digital marketing strategies across all channels. Also work with you to build your website and create online businesses that grow.
                    </p>
                </div>
                <img src={aboutHero1} alt="" />
            </div>
        </div>
    </section>
  )
}

export default AboutHero