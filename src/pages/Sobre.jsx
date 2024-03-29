import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Sobre() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="sobre">
      <header>
        <h2>QUEM SOMOS?</h2>
      </header>
      <section>
        <div className="sobreTextContainer">
          <div>
            <h3>{">>"} A EMPRESA</h3>
            <div className="companyContainer">
              <div>
                <p className="sobreTexto">
                  {" "}
                  Fundados em 2009, destacamo-nos no mercado como uma empresa de
                  distribuição de produtos químicos e matérias-primas
                  direcionadas à indústria. Somos representantes exclusivos e
                  temos parcerias previligiadas com fabricantes e distribuidores
                  da União Europeia e fora dela.
                </p>
                <p className="sobreTexto">
                  {" "}
                  No âmago da empresa, concentramo-nos em matérias-primas de
                  base, ou seja, especialidades químicas fornecidas às diversas
                  indústrias para que possam produzir os produtos finais. Com
                  escritórios em Braga, temos a nossa base logística em Santo
                  Tirso através de um sistema de outsourcing de um armazém
                  especializado em logística de produtos químicos. Esse armazém
                  é responsável pela receção, armazenamento e envio de
                  mercadorias para os nossos clientes.
                </p>
                <p className="sobreTexto">
                  {" "}
                  Devido à exigência técnica do setor químico, na UTQ
                  acompanhamos continuamente as inovações da área para propormos
                  e oferecermos a cada cliente as soluções mais adequadas para
                  otimização dos seus processos produtivos.{" "}
                </p>
                <p className="sobreTexto">
                  Continuamos a procurar crescer no setor como uma empresa de
                  referência, quer num incremento do nosso portólio, quer na
                  qualidade dos serviços prestados.
                </p>
              </div>
              <div data-aos-duration="1500" data-aos="flip-right">
                <img
                  src="/moleculas.png"
                  alt="Imagem de moleculas"
                  className="moleculasImg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sobreBtnContDesk parceirosBtnContDesk sobreButtons">
          <Link to="/produtos" className="link-underline">
            <button className="goSomewhereButton sobreBtns sobreBtnDesktop parceirosBtn">
              PRODUTOS
            </button>
          </Link>
          <Link to="/contactos" className="link-underline">
            <button className="goSomewhereButton  sobreBtns sobreBtnDesktop parceirosBtn">
              CONTACTE-NOS
            </button>
          </Link>
        </div>
      </section>
      <div className="sobreBtnContMobile">
        <Link to="/produtos" className="link-underline">
          <button className="goSomewhereButton sobreBtns sobreBtnMobile">
            PRODUTOS
          </button>
        </Link>
        <Link to="/contactos" className="link-underline">
          <button className="goSomewhereButton  sobreBtns sobreBtnMobile">
            CONTACTE-NOS
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Sobre;
