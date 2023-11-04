import React from 'react'
import '../style/HomeHero.css'
import HomeHero__1 from '../Images/HomeHero__1.png'
import HomeHero__2 from '../Images/HomeHero__2.png'
import HomeHero__3 from '../Images/HomeHero__3.png'

function HomeHero() {
  return (
    <section>
        <div className='container'>
            <div className='HomeHero__wrapper'>
                <div className='HomeHero__content'>
                    <h1>
                        Digitally forward <br /> creative
                    </h1>
                    <div className='HomeHero__text'>
                        <div className='hero__text__lin'>

                        </div>
                        <p>
                        When it comes to interactive marketing, we've got you covered.
                        Be where the world is going
                        </p>
                    </div>
                    <div className='HomeHero__btn'>
                        <span>
                         Enter your email
                        </span>
                        <button>
                           Try for free
                        </button>
                    </div>
                </div>
                <div className='HomeHero__img'>
                    <img className='HomeHero_2' src={HomeHero__1} alt="" />
                    <img className='HomeHero_1' src={HomeHero__2} alt="" />
                    <img className='HomeHero_3' src={HomeHero__3} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeHero