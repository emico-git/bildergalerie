import React from 'react'
import logo from '../bilder/logo.png'

export default function header() {
  return (
    <div className='header'>
        <img src={logo} width='200px'></img>
        <div className='Titel'>Emil's Bilder Gallerie</div>
    </div>
  )
}
