import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import logo from '../bilder/logo.png'

function Header() {

  AOS.init();

  return (
    <div className='header'>
        <div onClick={() => window.location.reload(true)} className='logo'>
          <img src={logo} className='logo-image'></img>
          <div className='logo-name'>
            <div className='slide-border'>
              <div className=' slide-in-right1'>Emil</div>
              <div className=' slide-in-right2'>Collins</div>
            </div>
          </div>
        </div>
        <div className='titel'>Bildergalerie</div>
        <div onClick={()=> window.open('https://emil.collins.at/', "_blank")} className='about-me'>Über mich</div>
    </div>
  )
}

export default Header;