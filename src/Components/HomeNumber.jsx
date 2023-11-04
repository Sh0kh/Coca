import React from 'react'
import '../style/HomeNumber.css'
import NumberCard from '../S components/NumberCard'
import number1 from '../Images/Number__1.png'
function HomeNumber() {
  return (
    <section className='number'>
        <div className='container'>
            <div className='number__wrapper'>
                <NumberCard Number='17k' 
                text='happy customers on worldwide'/>
                <NumberCard Number='15+'
                 text='Hours of work experience'/>
                <NumberCard Number='50+ '
                 text='Creativity & passionate members'/>
                <NumberCard Number='100+ '
                 text='Integrations lorem ipsum integrations'/>
            </div>
            <img className='number__img' src={number1} alt="" />
        </div>
    </section>
  )
}

export default HomeNumber