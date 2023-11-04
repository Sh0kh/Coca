import React from 'react'
import '../style/Footer.css'
import footer__logo from '../Images/footer__logo.png'
import footer__icon2 from '../Images/Social icon (1).png'
import footer__icon1 from '../Images/Social icon.png'
import footer__icon3 from '../Images/Social icon (2).png'
import footer__icon4 from '../Images/Social icon (3).png'
function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='footer__wrapper'>
                <div className='footer__logo'>
                    <img src={footer__logo} alt="" />
                    <p>
                    We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs
                    </p>
                    <div className='footer__icon'>
                <img src={footer__icon1} alt="" />
                <img src={footer__icon2} alt="" />
                <img src={footer__icon3} alt="" />
                <img src={footer__icon4} alt="" />
            </div>
                </div>
                <div className='footer__ul'>
                    <ul>
                        <h3>
                        Company
                        </h3>
                        <li>
                        About
                        </li>
                        <li>
                        Pricing 
                        </li>
                        <li>
                        Jobs
                        </li>
                        <li>
                        Blog
                        </li>
                    </ul>
                    <ul>
                        <h3>
                        Product
                        </h3>
                        <li>
                        Sales Software
                        </li>
                        <li>
                        Terms & Conditions
                        </li>
                        <li>
                        Privacy Policy
                        </li>
                        <li>
                        Sales Software
                        </li>
                    </ul>
                    <ul>
                        <h3>
                        Discover
                        </h3>
                        <li>
                        CRM Comparision
                        </li>
                        <li>    
                        Partner Program
                        </li>
                        <li>    
                        What is CRM
                        </li>
                        <li>
                        Resource
                        </li>
                    </ul>
                    <ul>
                        <h3>
                        Help Center
                        </h3>
                        <li>
                        Community
                        </li>
                        <li>    
                        Knowledge Base
                        </li>
                        <li>
                        Academy
                        </li>
                        <li>
                        Support
                        </li>
                    </ul>
                </div>
            </div>
           
        </div>
    </footer>
  )
}

export default Footer