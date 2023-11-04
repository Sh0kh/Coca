import React from 'react'
import '../style/ContactHero.css'
import map from '../Images/Map1.png'
function ContactHero() {
  return (
    <section className='conHero'>
        <div className='container'>
            <h1>
                Contact our team to find out more
            </h1>
            <div className='conHero__wrapper'>
                <div className='con__img'>
                    <img src={map} alt="" />
                </div>
                <div className='con__content'>
                    <div className='sup'>
                    <h2>
                      Support
                    </h2>
                    <p>
                    Our friendly team is here to help.
                    </p>
                    <span>
                        support@sans.com
                    </span>
                    
                    </div>
                    <div className='sales'>
                    <h2>
                    Sales
                    </h2>
                    <p>
                    Questions or queries? Get in touch!
                    </p>
                    <span>
                        sales@sans.com
                    </span>
                    
                    </div>
                    <div className='sup'>
                    <h2>
                    Phone
                    </h2>
                    <p>
                    Our friendly team is here to help.
                    </p>
                    <span>
                    +1 (435) 345-7655
                    </span>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactHero