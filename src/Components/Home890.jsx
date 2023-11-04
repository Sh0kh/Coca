import React from 'react'
import '../style/Home890.css'
import hicon1 from '../Images/hicon1.png'
import hicon2 from '../Images/hicon2.png'
import hicon3 from '../Images/hicon3.png'
import hicon4 from '../Images/hicon4.png'
import hicon5 from '../Images/hicon5.png'
import hicon6 from '../Images/hicon6.png'
import hicon7 from '../Images/hicon7.png'
import hicon8 from '../Images/hicon8.png'
function Home890() {
  return (
        <section className='h890'>
            <div className='container'>
                <div className='h890__wrapper'>
                   <div className='h890__content'>
                    <h1>
                            890+
                        </h1>
                        <p>
                        some big companies that we work with, and trust us very much
                        </p>
                    </div>
                    <div className='h890__img'>
                        <img src={hicon1} alt="" />
                        <img src={hicon2} alt="" />
                        <img src={hicon3} alt="" />
                        <img src={hicon4} alt="" />
                        <img src={hicon5} alt="" />
                        <img src={hicon6} alt="" />
                        <img src={hicon7} alt="" />
                        <img src={hicon8} alt="" />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Home890