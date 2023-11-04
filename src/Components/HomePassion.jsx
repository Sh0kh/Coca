import React from 'react'
import '../style/HomePassion.css'
import passion_1 from '../Images/passion1.png'
import passion_2 from '../Images/passion2.png'
import passion_3 from '../Images/passion3.png'

function HomePassion() {
  return (
    <section className='passion'>
        <div className='container'>
            <div className='passion__wrapper'>
                <div className='passion__img'>
                    <img className='passion__img2' src={passion_1} alt="" />
                    <img className='passion__img1' src={passion_3} alt="" />
                </div>
                <div className='passion__content'>
                    <h1>
                    Passion to increase company revenue up to 85%
                    </h1>
                    <p>
                    Automate your sales, marketing and service in one platform. Avoid date leaks and enable consistent messaging
                    </p>
                    <h3>
                        <img src={passion_2} alt="" />
                        <span>Close more deals with single - page contact managment</span>
                    </h3>
                    <h3>
                        <img src={passion_2} alt="" />
                        <span>Enjoy one-click calling, call scripts and voicemail automation</span>
                    </h3>
                    <h3>
                        <img src={passion_2} alt="" />
                        <span>Take stages and milestones of your deals to keep the sales process an track</span>
                    </h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomePassion