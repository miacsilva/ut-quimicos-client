import {Button, Card} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import jars from "/public/garrafasColoridasSemBGquadrado.png";

function Home() {
  return (
    <>
      <div>

      <section  className="homeContainer">
        <h3>
          Criada em 2008, a <strong>U. T. Químicos, Lda</strong> é uma empresa de distribuição de
          produtos químicos e matérias primas para a indústria transformadora.
          <br />A nossa equipa experiente e dinâmica procura de forma contínua:
          <br />
          <br />


            <h4>➤ Privilegiar/personalizar serviços e necessidades dos clientes.</h4>
            <h4>➤ Fidelizar clientes e fornecedores.</h4>
            <h4>➤ Estabelecer permanente contacto e
          relacionamento a longo prazo entre clientes e fornecedores.</h4>

          <br />
          Ambicionamos ser uma empresa de referência no mercado da distribuição
          de matérias-primas em Portugal e Pretendemos atingir este objectivo de
          forma sustentada baseando-nos em parâmetros exigentes de Qualidade,
          Segurança, Ambiente e Responsabilidade Social.
        </h3>

      <img src={jars} alt="Fracos Pigmentados" className="jarImg"/>
      </section>
        <div className="cardsContainer1">
            <h2></h2>
            <h2></h2>
          </div>
      </div>

    </>
  );
}

export default Home;
