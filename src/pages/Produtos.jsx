import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Produtos() {
  return (
    <>
            <div className="Produtos">

      <div className="productsImg1">
        <div className="productsText">
          <span className="border">Produtos</span>
        </div>
        <h5 className="scrollDown">Scroll Down</h5>
      </div>
      
      <section className="section section-inicial">
        <h2>Produtos para as aplicações nas mais diversas Indústrias</h2>
        <p>
          Na U. T. Químicos comercializamos produtos para os mais diversos fins, incidindo maioritáriamente na distribuíção de químicos para as indústrias das Tintas e Vernizes, dos Curtumes e dos Plásticos. 
        </p>
       {/*  <p className="arrow">
        ⇓
        </p> */}
      </section>

      <div className="productsImg2">
        <div className="productsText">
          <span id="transp" className="border"> <a href="/produtos/tintas-vernizes" className="anchor">Tintas e Vernizes</a> </span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>Section Two - Tintas e Vernizes</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          quas nisi laboriosam, corrupti provident placeat eveniet veniam ipsa?
          Nihil quo deserunt laudantium suscipit ipsa obcaecati nostrum amet
          quidem animi sit.
        </p>
      </section>

      <div className="productsImg4">
        <div className="productsText">
          <span id="transp" className="border"><Link to="/produtos/curtumes" className="anchor">Curtumes e Calçados</Link></span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>Section Three- Curtumes e Calçados  </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          quas nisi laboriosam, corrupti provident placeat eveniet veniam ipsa?
          Nihil quo deserunt laudantium suscipit ipsa obcaecati nostrum amet
          quidem animi sit.
        </p>
      </section>

      <div className="productsImg3">
        <div className="productsText">
          <span id="transp" className="border"><a href="/produtos/plasticos">  Plásticos </a></span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>Section QUATRO- Plásticos  </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          quas nisi laboriosam, corrupti provident placeat eveniet veniam ipsa?
          Nihil quo deserunt laudantium suscipit ipsa obcaecati nostrum amet
          quidem animi sit.
        </p>
      </section>


      <div className="productsImg5">
        <div className="productsText">
          <span id="transp" className="border"><a href="/produtos/papel" className="anchor">Papel</a></span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>Section CINCO- Papel  </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          quas nisi laboriosam, corrupti provident placeat eveniet veniam ipsa?
          Nihil quo deserunt laudantium suscipit ipsa obcaecati nostrum amet
          quidem animi sit.
        </p>
      </section>


      <div className="productsImg6">
        <div className="productsText">
          <span id="transp" className="border"><a href="/produtos/cortica-compositos" className="anchor">Cortiça e Compósitos </a></span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>Section SEIS- Cortiça e Compósitos  </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          quas nisi laboriosam, corrupti provident placeat eveniet veniam ipsa?
          Nihil quo deserunt laudantium suscipit ipsa obcaecati nostrum amet
          quidem animi sit.
        </p>
      </section>


      <div className="productsImg7">
        <div className="productsText">
          <span id="transp" className="border"><a href="/produtos/detergentes-cosmetica" className="anchor">Detergentes e Cosmética</a></span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>Section Sete- Detergentes  </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          quas nisi laboriosam, corrupti provident placeat eveniet veniam ipsa?
          Nihil quo deserunt laudantium suscipit ipsa obcaecati nostrum amet
          quidem animi sit.
        </p>
      </section>


      <div className="productsImg8">
        <div className="productsText">
          <span id="transp" className="border"><a href="/produtos/outras-industrias" className="anchor">Outras Indústrias</a></span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>Section QUATRO- Plasticos  </h2>
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
