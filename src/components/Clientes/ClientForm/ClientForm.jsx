import { useState } from "react";
import { registerClient } from "../../../services/client"; // atualizado
import { formatDateToISO, formatPhoneNumber } from "../../../utils/formatUtils";
import "./ClientForm.css";

const ClientForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    realizadoCom: "",
    name: "",
    birthDate: "",
    naturalidade: "",
    escola: "",
    serie: "",
    cordenadora: "",
    professora: "",
    mae: "",
    idade_mae: "",
    formacao_mae: "",
    profissao_mae: "",
    pai: "",
    idade_pai: "",
    formacao_pai: "",
    profissao_pai: "",
    pais_juntos: "",
    RG_responsavel: "",
    CPF_responsavel: "",
    address: "",
    phone: "",
    celular: "",
    reforco_escolar: "",
    atividades_extras: "",
    outros_acompanhamentos: "",
    quem_indicou: "",
    queixa: "",
    valor_sessao: "",
    forma_pagamento: "",
    irmaos: [],
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (["phone", "celular"].includes(name)) {
      formattedValue = formatPhoneNumber(value);
      if (formattedValue.length > 15) return;
    }

    setFormData({ ...formData, [name]: formattedValue });
  };

  const handleAddIrmao = () => {
    setFormData({
      ...formData,
      irmaos: [
        ...formData.irmaos,
        { nome_irmao: "", idade_irmao: "", escola_irmao: "", serie_irmao: "" },
      ],
    });
  };

  const handleIrmaoChange = (index, field, value) => {
    const updatedIrmaos = [...formData.irmaos];
    updatedIrmaos[index][field] = value;
    setFormData({ ...formData, irmaos: updatedIrmaos });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedData = {
        ...formData,
        birthDate: formatDateToISO(formData.birthDate),
      };

      await registerClient(formattedData);
      setMessage("Cliente cadastrado com sucesso!");
      onClose();
    } catch (error) {
      console.error(error);
      setMessage("Erro ao cadastrar cliente.");
    }
  };

  return (
    <div className="cadastro-container">
      <h2 className="cadastro-title">Cadastrar Cliente</h2>
      <form onSubmit={handleSubmit} className="cadastro-form">
        <input
          className="cadastro-input"
          name="realizadoCom"
          placeholder="Realizado com"
          onChange={handleChange}
          required
        />
        <input
          className="cadastro-input"
          name="name"
          placeholder="Nome"
          onChange={handleChange}
          required
        />
        <input
          className="cadastro-input"
          type="date"
          name="birthDate"
          onChange={handleChange}
          required
        />
        <input
          className="cadastro-input"
          name="naturalidade"
          placeholder="Naturalidade"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="escola"
          placeholder="Escola"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="serie"
          placeholder="Série"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="cordenadora"
          placeholder="Coordenadora"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="professora"
          placeholder="Professora"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="mae"
          placeholder="Nome da mãe"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="idade_mae"
          placeholder="Idade da mãe"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="formacao_mae"
          placeholder="Formação da mãe"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="profissao_mae"
          placeholder="Profissão da mãe"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="pai"
          placeholder="Nome do pai"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="idade_pai"
          placeholder="Idade do pai"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="formacao_pai"
          placeholder="Formação do pai"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="profissao_pai"
          placeholder="Profissão do pai"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="pais_juntos"
          placeholder="Pais juntos?"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="RG_responsavel"
          placeholder="RG do responsável"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="CPF_responsavel"
          placeholder="CPF do responsável"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="address"
          placeholder="Endereço"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="phone"
          placeholder="Telefone fixo"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="celular"
          placeholder="Celular"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="reforco_escolar"
          placeholder="Reforço escolar"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="atividades_extras"
          placeholder="Atividades extras"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="outros_acompanhamentos"
          placeholder="Outros acompanhamentos"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="quem_indicou"
          placeholder="Quem indicou?"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="queixa"
          placeholder="Queixa"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="valor_sessao"
          placeholder="Valor da sessão"
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          name="forma_pagamento"
          placeholder="Forma de pagamento"
          onChange={handleChange}
        />

        <h3>Irmãos</h3>
        {formData.irmaos.map((irmao, index) => (
          <div key={index} className="irmao-group">
            <input
              className="cadastro-input"
              placeholder="Nome do irmão"
              value={irmao.nome_irmao}
              onChange={(e) =>
                handleIrmaoChange(index, "nome_irmao", e.target.value)
              }
            />
            <input
              className="cadastro-input"
              placeholder="Idade do irmão"
              value={irmao.idade_irmao}
              onChange={(e) =>
                handleIrmaoChange(index, "idade_irmao", e.target.value)
              }
            />
            <input
              className="cadastro-input"
              placeholder="Escola do irmão"
              value={irmao.escola_irmao}
              onChange={(e) =>
                handleIrmaoChange(index, "escola_irmao", e.target.value)
              }
            />
            <input
              className="cadastro-input"
              placeholder="Série do irmão"
              value={irmao.serie_irmao}
              onChange={(e) =>
                handleIrmaoChange(index, "serie_irmao", e.target.value)
              }
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddIrmao}
          className="cadastro-button"
        >
          Adicionar Irmão
        </button>

        <button
          type="button"
          className="cadastro-button voltar-button"
          onClick={onClose}
        >
          Voltar
        </button>

        <button type="submit" className="cadastro-button">
          Cadastrar
        </button>
      </form>
      {message && <p className="cadastro-message">{message}</p>}
    </div>
  );
};

export default ClientForm;
