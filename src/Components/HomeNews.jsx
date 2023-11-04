import React from 'react'
import '../style/HomeNews.css'
import news1 from '../Images/News1.png'
import news2 from '../Images/News2.png'

import HomeNewsCard from '../S components/HomeNewsCard'
function HomeNews() {
  return (
    <section className='news'>
        <div className='container'>
            <h1>
            Trending news from Coca
            </h1>
            <p className='news__p'>
            we have some new Service to pamper you
            </p>
            <div className='News__wrapper'>
                <HomeNewsCard
                img={news1}
                text='What makes an authentic employee profile, and why does it matter ?'
                />
                <HomeNewsCard
                img={news2}
                text='How to build a Kaylen relationship with a good company'
                />
            </div>
        </div>
    </section>
  )
}

export default HomeNews