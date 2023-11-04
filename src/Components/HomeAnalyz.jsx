import React from 'react'
import '../style/HomeAnalyz.css'
import HomeAnalyzCard from '../S components/HomeAnalyzCard'
import an1 from '../Images/an1.png'
import an2 from '../Images/an2.png'
import an3 from '../Images/an3.png'
import an4 from '../Images/an4.png'
function HomeAnalyz() {
  return (
    <section className='analyz'>
        <div className='container'>
            <h1>
            Advertise, analyze, and optimize! We do it all for you
            </h1>
            <p className='analyz__p'>
            Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster
            </p>
            <div className='analyz__wrapper'>
                <HomeAnalyzCard img={an1}
                title='Lead happiness for customers'
                text='Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster'/>
                <HomeAnalyzCard img={an2}
                title='Mutually support each other'
                text='Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster'/>
                <HomeAnalyzCard img={an3}
                title='Have fun growing together'
                text='Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster'/>
                <HomeAnalyzCard img={an4}
                title='Make Your Business Grow'
                text='Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster'/>
            </div>
        </div>
    </section>
  )
}

export default HomeAnalyz