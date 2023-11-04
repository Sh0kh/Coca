import React from 'react'
import '../style/ContactForm.css'
import form1 from '../Images/form1.png'
function ContactForm() {
  return (
    <section className='form'>
        <div className='container'>
            <div className='form__wrapper'>
                <div className='form__content'>
                    <h1>
                    Let’s level up your brand
                    </h1>
                    <p>
                    You can reach us anytime <span>
                    hellosansbrothers@gmail.com
                    </span>
                    </p>
                    <form >
                       <div className='form__grid'>
                       <label htmlFor="">
                            First Name
                            <br />
                            <input type="text"  placeholder='First Name'/>
                        </label>
                        <label htmlFor="">
                            Last name
                            <br />
                            <input type="text" placeholder='Last Name'/>
                        </label>
                       </div>
                       <label htmlFor="">
                        Email
                        <br />
                        <input type="text" name="" id="" placeholder='Email' />
                       </label>
                       <br />
                       <label htmlFor="">
                         Phone number
                         <br />
                        <input type="number" name="" id="" placeholder='Phone Number' />
                       </label>
                       <br />
                       <label htmlFor="">
                         Message 
                         <br />
                         <input type="text" placeholder='Leave us a message...' />
                       </label>
                       <br />
                       <button type='submit'>
                       Get Started
                       </button>
                    </form>
                </div>
                <div className='form__img'>
                    <img src={form1} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactForm