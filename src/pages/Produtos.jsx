import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import ScrollReveal from "/src/containers/ScrollReveal";
import ScrollBackUp from "../components/ScrollBackUp";

function Produtos() {
  return (
    <>
<ScrollBackUp/>
    <div className="Produtos">
      <div className="productsImg1">
        <div className="productsText">
          <ScrollReveal> <span className="border3">Produtos</span></ScrollReveal>
        </div>
        <h5 className="scrollDown">Scroll Down</h5>
      </div>
      
      <section className="sectionP section-inicial">
        <h2>Produtos para aplicações nas mais diversas Indústrias</h2>
        <p>
          Na U. T. Químicos comercializamos produtos para os mais diversos fins, incidindo maioritáriamente na distribuíção de químicos para as indústrias das Tintas e Vernizes, dos Curtumes e dos Plásticos. 
        </p>
      </section>

      <div className="productsImg2">
        <div className="productsText">
          <ScrollReveal  delay={300}>
            <span id="transp"> <a href="/produtos/tintas-vernizes" className="anchor border2">Tintas e Vernizes</a> </span>
          </ScrollReveal>
        </div>
      </div>

      <section className="section-dark">
      </section>

      <div className="productsImg4">
        <div className="productsText">
        <ScrollReveal   delay={300}>
          <span id="transp"><Link to="/produtos/curtumes" className="anchor border2">Curtumes e Calçados</Link></span>
          </ScrollReveal>
        </div>
      </div>

      <section className="section-dark">
      </section>

      <div className="productsImg3">
        <div className="productsText">
          <ScrollReveal delay={300}>
            <span id="transp"><a href="/produtos/plasticos" className="anchor border2">  Plásticos </a></span>
          </ScrollReveal>
        </div>
      </div>

      <section className="sectionP section-dark">
      </section>


      <div className="productsImg5">
        <div className="productsText">
          <ScrollReveal delay={300}>
            <span id="transp"><a href="/produtos/papel" className="anchor border2">Papel</a></span>
          </ScrollReveal>
        </div>
      </div>

      <section className="section section-dark">
      </section>

      <div className="productsImg6">
        <div className="productsText">
          <ScrollReveal delay={300}>
            <span><a href="/produtos/cortica-compositos" className="border2">Cortiça e Compósitos</a></span>
          </ScrollReveal>
        </div>
      </div>

      <section className="section section-dark">
      </section>

      <div className="productsImg7">
        <div className="productsText">
          <ScrollReveal delay={300}>
            <a href="/produtos/detergentes-cosmetica" className=" border2">Detergentes e Cosmética</a>
          </ScrollReveal>
        </div>
      </div>

      <section className="section section-dark">
      </section>

      <div className="productsImg8">
        <div className="productsText">
          <ScrollReveal delay={300}>
            <span  ><a href="/produtos/outras-industrias" className="border2">Outras Indústrias</a></span>
          </ScrollReveal>
        </div>
      </div>

      <section className="section section-dark">
      </section>

      <div className="productsImg1">
        <div className="productsText">
          <span className="border3">Produtos</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default Produtos;
