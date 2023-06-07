import "bootstrap/dist/css/bootstrap.min.css"
/* import jars from "/garrafasColoridasSemBGquadrado.png"; */
import bluecloud from "/nuvemAzul-removebg-preview.png"
import ScrollReveal from "/src/containers/ScrollReveal";

function Home() {
  
  return (
    <>
      
      <section  className="homeContainer">
        {/* <h3>
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
        </h3> */}

<div className="homeLetters">

        <ScrollReveal >
        <h3 className="area1"> U. T.</h3>
      </ScrollReveal>  
      <ScrollReveal>

        <h3 className="area2"> Químicos, Lda</h3>
      </ScrollReveal>
  
</div>

      {/* <img src={jars} alt="Fracos Pigmentados" className="jarImg"/> */}
      <img src={bluecloud} alt="Fracos Pigmentados" className="cloudImg"/> 


      </section>

      <div className="secHomeContainer">


      </div>

    </>
  );
}

export default Home;
