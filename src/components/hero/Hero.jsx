import React from 'react'
import './hero.scss'

export default function Hero() {
  return (
    <div id='hero' className='hero container'>
      <div className="left">
        <h2>Avec Passion, qu'est-ce que c'est ?</h2>
        <h1>GROS TITRE</h1>
        <div className='participants'></div>
        <a href="#" className='button1'>Je participe !</a>
      </div>
      <div className="right">
          <div className="first-picture"></div>
          <div className="second-picture"></div>
      </div>
    </div>
  )
}
