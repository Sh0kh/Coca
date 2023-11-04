import React from 'react'
import '../style/AboutMeet.css'
import MeetCard from '../S components/MeetCard'
import meet4 from '../Images/meet4.png'
import meet5 from '../Images/meet5.png'
import meet6 from '../Images/meet6.png'
function AboutMeet() {
  return (
    <section className='meet'>
        <div className='container'>
            <h1>
            Meet our team of creators, designers, and world-class problem solvers
            </h1>
            <p className='meet__p'>
            To become the company that customers want, it takes a group of passionate people. Get to know the people who lead
            </p>
            <div className='meet__wrapper'>
                <MeetCard
                img={meet4}
                title='Arlyne Stefano'
                text='Founder & CEO'
                />
                <MeetCard
                img={meet5}
                title='Katy Cristy'
                text='Chief Technology Officer'
                />
                <MeetCard
                img={meet6}
                title='Roger Dzawin'
                text='Chief Technology Officer'
                />
            </div>
        </div>
    </section>
  )
}

export default AboutMeet