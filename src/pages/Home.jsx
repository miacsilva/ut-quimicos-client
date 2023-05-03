import {Button, Card} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function Home() {
  return (
    <>
      <div className="homeContainer">
        <h3 className="alert alert-info">
          Criada em 2008, a U. T. Químicos é uma empresa de distribuição de
          produtos químicos e matérias primas para a indústria transformadora.
          <br />A nossa equipa experiente e dinâmica procura de forma contínua:
          <br />
          - Privilegiar/personalizar serviços e necessidades dos clientes; -
          Fidelizar clientes e fornecedores; - Estabelecer permanente contacto e
          relacionamento a longo prazo entre clientes e fornecedores;
          <br />
          Ambicionamos ser uma empresa de referência no mercado da distribuição
          de matérias-primas em Portugal e Pretendemos atingir este objectivo de
          forma sustentada baseando-nos em parâmetros exigentes de Qualidade,
          Segurança, Ambiente e Responsabilidade Social.
        </h3>

        <div className="cardsContainer1">
          <div className="cardContainer2 alert alert-info" role="alert">
            <h2>- Privilegiar/personalizar serviços e necessidades dos clientes.</h2>
            <h2>-Fidelizar clientes e fornecedores.</h2>
            <h2>-Estabelecer permanente contacto e
          relacionamento a longo prazo entre clientes e fornecedores.</h2>
          </div>
          {/* <div className="cardContainer2">
          <h2>-Fidelizar clientes e fornecedores.</h2>
          </div>
          <div className="cardContainer2">
          <h2>-Estabelecer permanente contacto e
          relacionamento a longo prazo entre clientes e fornecedores.</h2>
          </div> */}
        </div>

        <Card style={{width: "18rem"}}> 
        <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> </div>
</Card>
        <Button>isto é um botão</Button>

 {/*  <div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
      </div>
    </>
  );
}

export default Home;
