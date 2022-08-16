import React from 'react'
import './navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <div className="left">
          <li>
            <a href="#hero">
              <h2>Av<span>e</span>c Passion</h2>
            </a>
          </li>
        </div>
        <div className="center">
          <li>
            <a href="#story">Pourquoi ?</a>
          </li>
          <li>
            <a href="#journey">Mon trajet</a>
          </li>
        </div>
        <div className="right">
          <a href="https://www.helloasso.com/associations/fondation-pour-la-recherche-sur-les-avc/collectes/rando-velo#tickets" className='button1'>Je Participe !</a>
        </div>
      </ul>
    </div>
  )
}