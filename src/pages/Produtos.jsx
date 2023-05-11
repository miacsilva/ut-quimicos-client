import "bootstrap/dist/css/bootstrap.min.css";

function Produtos() {
  return (
    <>
            <div className="Produtos">

      <div className="productsImg1">
        <div className="productsText">
          <span className="border">Aplicações</span>
        </div>
      </div>
      
      <section className="section section-light">
        <h2>Produtos para as aplicações nas mais diversas áreas</h2>
        <p>
          Na U. T. Químicos comercializamos produtos para os mais diversos fins, incidindo maioritáriamente na distribuíção de químicos para as indústrias das Tintas e Vernizes, dos Curtumes e dos Plásticos, entre muitas outras. 
        </p>
        <p className="arrow">
        ⇓
        </p>
      </section>

      <div className="productsImg2">
        <div className="productsText">
          <span id="transp" className="border"> <a href="/produtos/tintas-vernizes" className="anchor">Tintas e Vernizes</a> </span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>Section Two</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          quas nisi laboriosam, corrupti provident placeat eveniet veniam ipsa?
          Nihil quo deserunt laudantium suscipit ipsa obcaecati nostrum amet
          quidem animi sit.
        </p>
      </section>

      <div className="productsImg3">
        <div className="productsText">
          <span id="transp" className="border">Plásticos</span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>Section Three</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          quas nisi laboriosam, corrupti provident placeat eveniet veniam ipsa?
          Nihil quo deserunt laudantium suscipit ipsa obcaecati nostrum amet
          quidem animi sit.
        </p>
      </section>

      <div className="productsImg1">
        <div className="productsText">
          <span className="border">Produtos</span>
        </div>
      </div>


      </div>
    </>
  );
}

export default Produtos;
