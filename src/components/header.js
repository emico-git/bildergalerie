import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import logo from '../bilder/logo.png'

export default function header() {

  AOS.init();

  return (
    <div className='header'>
        <div className='logo'>
          <img src={logo} width='200px'></img>
          <div className='logo-name'>
            <div className='slide-border'>
              <div className=' slide-in-right1'>Emil</div>
              <div className=' slide-in-right2'>Collins</div>
            </div>
          </div>
        </div>
        <div className='titel'>Bildergalerie</div>
        <div className='about-me'>Über mich</div>
    </div>
  )
}
