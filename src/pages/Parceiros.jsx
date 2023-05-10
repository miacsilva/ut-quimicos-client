import React from 'react'
import cromatos from "/Cromatos_800x800.png"
import colorlac from "/cl-logo.png"
import igm from "/igm-logo.png"

function Parceiros() {
  return (
    <div>
        <header>
            <h1>Parceiros</h1>
        </header>

        <section>
                <div className='logo-container'>
            <img src={cromatos} alt="cromatos logótipo" className="parceiros-logo"/>
            <img src={colorlac} alt="colorlac logótipo" className="parceiros-logo"/>
            <img src={igm} alt="igm resins logótipo" className="parceiros-logo"/>
                </div>

        </section>




    </div>
  )
}

export default Parceiros