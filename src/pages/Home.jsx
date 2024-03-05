import "bootstrap/dist/css/bootstrap.min.css";
/* import jars from "/garrafasColoridasSemBGquadrado.png"; */
import ScrollReveal from "/src/containers/ScrollReveal";
import group from "/group-icon.png";
import handshake from "/handshake-icon.png";
import exchange from "/exchange-icon.png";
import logo from "/UTQ-logo.png";
import produtosImage from "/tubosDeEnsaio.jpg"
import contactosImage from "/contacto-header.jpg"
import { Link } from "react-router-dom";
import scrollGif from "/mouseScroll.gif"



function Home() {
  return (
    <>
      <section className="homeContainer">
        <ScrollReveal delay={700} duration={1000}>
          <img className="logo" src={logo} alt="UT Químicos logotipo" />
        </ScrollReveal>
        <div className="homeLetters">
          <ScrollReveal delay={1000} duration={2000}>
            <h5 className="text2">
              COMÉRCIO E <br /> DISTRIBUIÇÃO DE
            </h5>
          </ScrollReveal>
          <ScrollReveal delay={1500} duration={2500}>
            <h4 className="text3">PRODUTOS QUÍMICOS</h4>
          </ScrollReveal>
        </div>
        <img src={scrollGif} alt="gif de um rato de computador a fazer scroll" className="scrollGif"/>
      </section>

      <div className="secHomeContainer">
      <div className="fadeTransition"></div>
        <div className="secHomeContainerContent">
          <h3>
            Na <strong>U. T. Químicos, Lda</strong> dedicamo-nos à distribuição
            de produtos químicos e matérias-primas para a indústria
            transformadora
          </h3>
          <div className="bannerHomePage">
              <h2>A nossa equipa experiente e dinâmica procura de forma
                 contínua:
              </h2>
          </div>
          <div className="secHomeContainerImageText">
            <div className="bulletPoints">
              <div className="iconAndText">
                <img src={exchange}></img>
                <ScrollReveal delay={300} scale={1.3}>
                  <h4>
                    Privilegiar e personalizar serviços e necessidades dos
                    clientes
                  </h4>
                </ScrollReveal>
              </div>
            </div>
            <div className="iconAndText">
              <img src={handshake}></img>
              <ScrollReveal delay={900} scale={1.3}>
                <h4>
                  {" "}
                  Fidelizar clientes e fornecedores
                </h4>
              </ScrollReveal>
            </div>
            <div className="iconAndText">
              <img src={group}></img>
              <ScrollReveal delay={1400} scale={1.3}>
                <h4>
                  {" "}
                  Contacto permanente e relacionamento a longo
                  prazo entre clientes e fornecedores
                </h4>
              </ScrollReveal>
            </div>
          </div>
        </div>

      </div>
          <div className="lastBannerHomePage">
            <Link to="/produtos" className="produtosSquare">
              <div className="produtosSquare">
                <h2>Os nossos <span> produtos</span></h2>
                <img src={produtosImage} alt="ir para produtos"/>
              </div>
            </Link>

            <Link to="/contactos" className="produtosSquare">
              <div className="contactosSquare">
                <h2> Contacte-nos</h2>
                <Link to="/produtos"></Link>
                <img src={contactosImage} alt="ir para contactos" />
              </div>
            </Link>
          </div>
    </>
  );
}

export default Home;
