import React from 'react'
import './story.scss'

export default function Story() {
  return (
    <div id='story' className='container story'>

        <div className='left'>
          <img src="" alt="" />
        </div>

        <div className='right'>
          <h2>Histoire du projet</h2>
          <p>
            L'histoire qui se cache derrière cette mission est celle de mon père, Thierry. 
            En 2019, à la suite d'une opération du genou qui tourne mal, 
            il fait un grave Accident Vasculaire Cérébral. S'ensuit une hémiplégie et une aphasie.
          </p>
          <p>
            Pour la faire courte, mon père a un bras droit qui marche à moitié, 
            et il est devenu très dur voir impossible pour lui de lire et d'écrire. De plus, il est compliqué 
            pour lui de s'exprimer et nous devons nous armer de patience pour communiquer des informations somme toutes assez basiques. 
            En gros, c’est comme s’il avait toutes les idées en tête mais qu’il ne pouvait pas les restituer. 
            Vous voyez cette sensation d’avoir le mot au bout de langue ? 
            Lui il l’a tout le temps.
          </p>
          <p>
            Bon voilà ça c'était pour la partie triste. 
            Maintenant place aux trucs cools !
            </p>
          <p>
            Je m’appelle Nicolas, j'ai 23 ans et je termine mon école d’ingénieur. 
            J’ai pu négocier à mon embauche du temps pour réaliser ce projet. 
            J’avais à cœur de réaliser quelque chose de grand, quelque chose de beau, 
            et quelque chose d’utile avant de rentrer dans la vie active.
          </p>
        </div>

    </div>
  )
}
