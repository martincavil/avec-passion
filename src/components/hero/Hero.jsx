import React from 'react'
import './hero.scss'

export default function Hero() {
  return (
    <div id='hero' className='hero container'>
      <div className="left">
        <h1>Avec Passion, qu'est-ce que c'est ?</h1>
        <p>
          Salut, moi, c'est Nico, j'ai 23 ans, et je vais parcourir plusieurs pays pour récolter des fonds pour la recherche sur l'AVC.</p>
          Un brin fan de vélo et désireux de traverser le plus grand nombre de frontières possible, ce trajet se fera en pédalant.
        <p>
          Le but est simple : 1€ donné pour la recherche sur l’AVC = 1km parcouru.
          Plus je verrais de ville, plus je pourrais quêter en direct avec les autochtones pour récolter encore plus de sous.
        </p>
        <div className='participants'></div>
        <a href="#" className='button1'>Je participe !</a>
      </div>
      <div className="right">
          <div className="first-picture">
            <img src="/assets/images/IMG_3766.jpg" alt="Papa en vacances" className='first-picture'/>
          </div>
          <img src='/assets/images/IMG_3767.jpg' alt='' className="second-picture" />
      </div>
    </div>
  )
}
