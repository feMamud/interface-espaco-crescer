import Mateus from "../../assets/mateus.png";
import useFundoMateusAnimations from "./FundoMateusAnimations";
import "./FundoMateus.css";

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
            Psicopedagogia
          </h1>
          <h1 className="h1-fundoMateus-2">
            Psicopedagoga
          </h1>
          <h1 className="h1-fundoMateus-3">
            :
          </h1>
          <h1 className="h1-fundoMateus-4">
            Mateus
          </h1>
          <h1 className="h1-fundoMateus-5">
            Mamud
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


