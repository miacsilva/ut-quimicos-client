// Partners logos
import cromatos from "/Cromatos_800x800.png";
import colorlac from "/cl-logo.png";
import igm from "/igm-logo.png";
import octoquimica from "/octoLogo-NoBg.png";
import quimser from "/quimser-removebg.png";
import ecopower from "/Ecopower.png";
import henghe from "/Henghe-NoBg.png";
import highquemie from "/HighChemie-NoBg.png";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ScrollRestoration } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Parceiros() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="parceiros">
      <header>
        <h2>Parceiros</h2>
      </header>

      <section className="parceiros-section">
        <div className="logo-container">
          <div className="internacionalDiv">
            <h3>
              Empenhamo-nos em estabelecer as melhores parcerias de modo a
              satisfazer as necessidades do mercado de forma atual
            </h3>

            <div className="partnersImagesCont">
              <img
                src={cromatos}
                alt="cromatos logótipo"
                className="parceiros-logo"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <img
                src={colorlac}
                alt="colorlac logótipo"
                className="parceiros-logo"
                data-aos="zoom-in"
              />
              <img
                src={igm}
                alt="igm resins logótipo"
                className="parceiros-logo"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <img
                src={octoquimica}
                alt="logótipo da empresa OctoQuímica"
                className="parceiros-logo"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <img
                src={quimser}
                alt="logótipo da empresa Quimser"
                className="parceiros-logo"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <img
                src={henghe}
                alt="logótipo da empresa chinesa Henghe"
                className="parceiros-logo"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <img
                src={highquemie}
                alt="logótipo da empresa Highquemie"
                className="parceiros-logo"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <img
                src={ecopower}
                alt="logótipo da empresa chinesa Ecopower"
                className="parceiros-logo ecopower"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="sobreBtnContDesk parceirosBtnContDesk">
        <Link to="/produtos" className="link-underline">
          <button className="goSomewhereButton sobreBtns sobreBtnDesktop">
            PRODUTOS
          </button>
        </Link>
        <Link to="/contactos" className="link-underline">
          <button className="goSomewhereButton  sobreBtns sobreBtnDesktop">
            CONTACTE-NOS
          </button>
        </Link>
      </div>
      <div className="sobreBtnContMobile">
        <Link to="/produtos" className="link-underline">
          <button className="goSomewhereButton sobreBtns sobreBtnMobile sobreBtnDesktop">
            PRODUTOS
          </button>
        </Link>
        <Link to="/contactos" className="link-underline">
          <button className="goSomewhereButton  sobreBtns sobreBtnMobile">
            CONTACTE-NOS
          </button>
        </Link>
      </div>
      <ScrollRestoration />
    </div>
  );
}

export default Parceiros;
