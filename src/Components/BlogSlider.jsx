import React from 'react'
import '../style/BlogSlider.css'
import slider1 from '../Images/slider1.png'
import slider2 from '../Images/slider2.png'
import slider3 from '../Images/slider3.png'
import slider4 from '../Images/slider4.png'
import slider5 from '../Images/slider5.png'
function BlogSlider() {
  return (
    <section className='slider'>
        <div className='container'>
            <div className='slider__wrapper'>
                <div className='slider__card'>
                    <img src={slider1} alt="" />
                    <h2>
                    Starter
                    </h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <h1>
                    $100
                    </h1>
                    <h4>
                    What’s included:
                    </h4>
                    <h5>
                     <img src={slider2} alt="" />    Unlimited Upload
                    </h5>
                    <h5>
                     <img src={slider2} alt="" />    Advanced Statistic
                    </h5>
                    <h5>
                     <img src={slider2} alt="" />    Profile Badge
                    </h5>
                    <h5>
                     <img src={slider2} alt="" />    Access to the community
                    </h5>
                    <h6>
                       <img src={slider3} alt="" />  History of all Liked Photos 
                    </h6>
                    <h6>
                       <img src={slider3} alt="" />  Directory Listing
                    </h6>
                    <h6>
                       <img src={slider3} alt="" />Customize Your Profile
                    </h6>
                    <h6>
                       <img src={slider3} alt="" />  Display Your Workshops
                    </h6>
                    <button className='slider__btn'>
                        Chose Plan
                    </button>
                </div>
                <div className='slider__card2'>
                    <div className='img__wrapper'>
                        <img src={slider4} alt="" />
                        <img src={slider5} alt="" />
                    </div>
                    <h3>
                        Popular
                    </h3>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <h1 id='sl__h1'>
                    $1400
                    </h1>
                    <ul>
                        <li>
                        What’s included:
                        </li>
                        <li>
                        <img src={slider2} alt="" /> Unlimited Upload
                        </li>
                        <li>
                        <img src={slider2} alt="" /> Advanced   Statistic
                        </li>
                        <li>
                        <img src={slider2} alt="" /> Profile Badge
                        </li>
                        <li>
                        <img src={slider2} alt="" /> Access to the community
                        </li> 
                        <li id='list_s'>
                            <img src={slider3} alt="" />History of all Liked Photos
                        </li>
                        <li>
                            <img src={slider2} alt="" />
                            Directory Listing
                        </li>
                        <li id='list_s'>
                            <img src={slider3} alt="" />Customize Your Profile
                        </li>
                        <li id='list_s'>
                            <img src={slider3} alt="" />Display Your Workshops
                        </li>
                    </ul>
                    <button>
                        Chose Plan
                    </button>
                </div>
                <div className='slider__card'>
                    <img src={slider1} alt="" />
                    <h2>
                    Enterprise
                    </h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <h1>
                    $2100
                    </h1>
                    <h4>
                    What’s included:
                    </h4>
                    <h5>
                     <img src={slider2} alt="" />    Unlimited Upload
                    </h5>
                    <h5>
                     <img src={slider2} alt="" />    Advanced Statistic
                    </h5>
                    <h5>
                     <img src={slider2} alt="" />    Profile Badge
                    </h5>
                    <h5>
                     <img src={slider2} alt="" />    Access to the community
                    </h5>
                    <h6>
                       <img src={slider3} alt="" />  History of all Liked Photos 
                    </h6>
                    <h6>
                       <img src={slider3} alt="" />  Directory Listing
                    </h6>
                    <h6>
                       <img src={slider3} alt="" />Customize Your Profile
                    </h6>
                    <h6>
                       <img src={slider3} alt="" />  Display Your Workshops
                    </h6>
                    <button className='slider__btn'>
                        Chose Plan
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogSlider