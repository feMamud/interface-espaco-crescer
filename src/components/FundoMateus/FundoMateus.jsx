import Mateus from "../../assets/mateus.png";
import useFundoMateusAnimations from "./FundoMateusAnimations";
import "./FundoMateus.css";
import './FundoMateusTablet.css';
import './FundoMateusCelular.css';

function FundoMateus() {
  // Chame o hook dentro do componente
  useFundoMateusAnimations()
  return (
    <div className="mae-fundoMateus">
      <div className="container-fundoMateus">
        <div className="fundo-fundoMateus">
          <img 
            className="img-fundoMateus" 
            src={Mateus} 
            alt="Mateus">
          </img>
          <h1 className="h1-fundoMateus-1">
            Psicanálise
          </h1>
          {/*<h1 className="h1-fundoMateus-2">
            Psicanalista
          </h1>
          <h1 className="h1-fundoMateus-3">
            :
          </h1>*/}
          <h1 className="h1-fundoMateus-4">
            Mateus
          </h1>
          <h1 className="h1-fundoMateus-5">
            Gama
          </h1>
          <h1 className="h1-fundoMateus-6">
            Rodrigues
          </h1>
        </div>
        <div className="fundo-fundoMateus-2">
        <img 
            className="img-fundoMateus-2" 
            src={Mateus} 
            alt="Mateus">
          </img>
        </div>
      </div>
    </div>
  );
}

export default FundoMateus;


