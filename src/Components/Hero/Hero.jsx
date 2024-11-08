import React from 'react'
import './Hero.css'
import hero from '../../assets/hero_img.jpg'
import glovo from '../../assets/glovo-logo.svg'
import oracle from '../../assets/oracle-logo.svg'
import paypal from '../../assets/paypal-logo.svg'
import stripe from '../../assets/stripe-logo.svg'
import segment from '../../assets/segment-logo.svg'
import ionic from '../../assets/ionic-logo.svg'

const Hero = () => {
  return (
    <div>
        <div className="hero">
            <h1 className="hero_header">Crafting Content That Connects, Converts <br /> and Reflect Your Brand Voice</h1>
            <p> We bring your brand’s story to life with strategic, engaging content. From blogs and social media  <br /> posts to full content strategies, we’re here to help you stand out.</p>
            <div className="btns">
                <button className='cta-button'>Get Started Free</button>
            </div>
            <img src={hero} alt="hero-img" className='hero_img'/>
        </div>
        <div className="trusted">
        <h2>Over 2,000 Organizations use our platform</h2>
        <div className="hero_imgs">
            <img src={glovo} alt="" />
            <img src={oracle} alt="" />
            <img src={segment} alt="" />
            <img src={ionic} alt="" />
            <img src={paypal} alt="" />
            <img src={stripe} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Hero