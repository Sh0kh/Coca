import React from 'react'
import '../style/HomeHelp.css'
import HomeHelpCard from '../S components/HomeHelpCard'
import helpCard__1 from '../Images/help__card1.png'
import helpCard__2 from '../Images/help__card2.png'
import helpCard__3 from '../Images/help__card3.png'
import helpCard__4 from '../Images/help__card4.png'
function HomeHelp() {
  return (
    <section className='help'>
        <div className='container'>
            <h1>
            Coca help our client solve complex customer problems with date that does more.
            </h1>
            <p>
            Our platform offers the modern enterprise full control of how date can be access and used with industry leading software solutions for identity, activation, and date collaboration
            </p>
            <div className='help__wrapper'>
                <HomeHelpCard img={helpCard__1} title='Build your date fundamental'
                text='Build access to date, develop valuable business insights and drive revenue while maintaining full control over access and use of date at all times.'/>
                <HomeHelpCard img={helpCard__2} title='Measure more effective'
                text='Effectively measure people-based campaigns with the freedom to choose from best-of breed partners to optimize and drive media innovation.'/>
                <HomeHelpCard img={helpCard__3} title='Activate your  date'
                text='Accurately address your specific audiences at scale across any channel, platform, publisher or network and safely translate date between identity space to improve results.'/>
                <HomeHelpCard img={helpCard__4} title='Strengthen consumer privacy'
                text='Protect your customer date with leading privacy-preserving technologies and advanced techniques to minimize date movement while still enabling insight generation.'/>
            </div>
        </div>
    </section>
  )
}

export default HomeHelp