import "./OrganizacaoSelect.css";
import { useNavigate } from "react-router-dom";

function OrganizacaoSelect() {
  const navigate = useNavigate();

  return (
    <div className="orgselect-mae">
      <div className="painel-orgselect">
        <h1 className="h1-orgselect-1">Aqui</h1>
        <h1 className="h1-orgselect-1">você</h1>
        <h1 className="h1-orgselect-1">acessa</h1>
        <h1 className="h1-orgselect-1">suas</h1>
        <h1 className="h1-orgselect-1">informações</h1>
        <h1 className="h1-orgselect-1">!</h1>

      </div>
      <div className="orgselect-botao">
        <button
          className="orgselect-botao cliente"
          onClick={() => navigate("./clientes")}
        >
          Clientes
        </button>
        <button
          className="orgselect-botao paciente"
          onClick={() => navigate("./pacientes")}
        >
          Pacientes
        </button>
      </div>
    </div>
  );
}

export default OrganizacaoSelect;
