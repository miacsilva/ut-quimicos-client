
// Partners logos

import cromatos from "/Cromatos_800x800.png";
import colorlac from "/cl-logo.png";
import igm from "/igm-logo.png";
import octoquimica from "/octoLogo-NoBg.png"
import quimser from "/Quimser-NoBg.png"
import ecopower from "/Ecopower.png"
import henghe from "/Henghe-NoBg.png"
import highquemie from "/HighChemie-NoBg.png"


import { Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";


function Parceiros() {
  return (
    <div id="parceiros">
      <header>
        <h2>Parceiros</h2>
      </header>

      <section className="parceiros-section">
        <div className="logo-container">
          <div className="internacionalDiv">
            <h3>Empenhamo-nos em estabelecer as melhores parcerias de modo a satisfazer as necessidades do mercado de forma atual</h3>

            <div className="partnersImagesCont">
              <img
                src={cromatos}
                alt="cromatos logótipo"
                className="parceiros-logo"
              />
              <img
                src={colorlac}
                alt="colorlac logótipo"
                className="parceiros-logo"
              />
              <img
                src={igm}
                alt="igm resins logótipo"
                className="parceiros-logo"
              />
               <img
                src={octoquimica}
                alt="logótipo da empresa OctoQuímica"
                className="parceiros-logo"
              />
               <img
                src={quimser}
                alt="logótipo da empresa Quimser"
                className="parceiros-logo"
              />
               <img
                src={henghe}
                alt="logótipo da empresa chinesa Henghe"
                className="parceiros-logo"
              />
               <img
                src={highquemie}
                alt="logótipo da empresa Highquemie"
                className="parceiros-logo"
              />
               <img
                src={ecopower}
                alt="logótipo da empresa chinesa Ecopower"
                className="parceiros-logo ecopower"
              />
            </div>
          </div>

          
        </div>
      </section>

<Link to="/contactos" className="link-underline"><button className="goSomewhereButton partnersBtn"> Contacte-nos </button></Link>

<ScrollRestoration/>

    </div>
  );
}

export default Parceiros;
