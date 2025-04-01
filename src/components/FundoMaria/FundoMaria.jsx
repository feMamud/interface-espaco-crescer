import Maria from "../../assets/maria.png";
import "./FundoMaria.css";
import './FundoMariaTablet.css';
import './FundoMariaCelular.css';
import useFundoMariaAnimations from "./FundoMariaAnimations"; // Importe o hook

function FundoMaria() {
  // Chame o hook dentro do componente
  useFundoMariaAnimations();
  return (
    <div className="mae-fundomaria">
      <div className="container-fundomaria">
        <div className="fundo-fundomaria">
          <img 
            className="img-fundomaria" 
            src={Maria} 
            alt="Maria">
          </img>
          <h1 className="h1-fundomaria-1">
            Psicopedagogia
          </h1>
          <h1 className="h1-fundomaria-2">
            Psicopedagoga
          </h1>
          <h1 className="h1-fundomaria-3">
            :
          </h1>
          <h1 className="h1-fundomaria-4">
            Maria
          </h1>
          <h1 className="h1-fundomaria-5">
            Mamud
          </h1>
        </div>
        <div className="fundo-fundomaria-2">
        <img 
            className="img-fundomaria-2" 
            src={Maria} 
            alt="Maria">
          </img>
        </div>
      </div>
    </div>
  );
}

export default FundoMaria;


