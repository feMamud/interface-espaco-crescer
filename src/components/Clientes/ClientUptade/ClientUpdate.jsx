import { useState, useEffect } from "react";
import { updateClient } from "../../../services/client";
import { formatDateToISO, formatPhoneNumber } from "../../../utils/formatUtils";
import "./ClientUpdate.css";

const ClientUpdate = ({ client, onClose }) => {
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

  useEffect(() => {
    if (client) {
      setFormData({
        ...client,
        phone: formatPhoneNumber(client.phone || ""),
        celular: formatPhoneNumber(client.celular || ""),
        birthDate: client.birthDate?.split("T")[0] || "",
        irmaos: client.irmaos || [],
      });
    }
  }, [client]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (["phone", "celular"].includes(name)) {
      formattedValue = formatPhoneNumber(value);
      if (formattedValue.length > 15) return;
    }

    setFormData({ ...formData, [name]: formattedValue });
  };

  const handleIrmaoChange = (index, field, value) => {
    const updatedIrmaos = [...formData.irmaos];
    updatedIrmaos[index][field] = value;
    setFormData({ ...formData, irmaos: updatedIrmaos });
  };

  const handleAddIrmao = () => {
    setFormData({
      ...formData,
      irmaos: [
        ...formData.irmaos,
        { nome: "", idade: "", escola: "", serie: "" },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { id, ...clientDataWithoutId } = formData;

      const formattedData = {
        ...clientDataWithoutId,
        birthDate: formatDateToISO(formData.birthDate),
        irmaos: formData.irmaos.map(({ nome, idade, escola, serie }) => ({
          nome,
          idade,
          escola,
          serie,
        })),
      };

      await updateClient(client.id, formattedData);
      setMessage("Cliente atualizado com sucesso!");
      onClose();
    } catch (error) {
      console.error(error);
      setMessage("Erro ao atualizar cliente.");
    }
  };

  const handleRemoveIrmao = (index) => {
    const updatedIrmaos = [...formData.irmaos];
    updatedIrmaos.splice(index, 1);
    setFormData({ ...formData, irmaos: updatedIrmaos });
  };

  return (
    <div className="cadastro-container">
      <h2 className="cadastro-title">Editar Cliente</h2>
      <form onSubmit={handleSubmit} className="cadastro-form">
        {Object.entries(formData)
          .filter(([key]) => key !== "irmaos" && key !== "id")
          .map(([key, value]) => (
            <input
              key={key}
              className="cadastro-input"
              type={key === "birthDate" ? "date" : "text"}
              name={key}
              placeholder={key.replace(/_/g, " ")}
              value={value}
              onChange={handleChange}
            />
          ))}

        <h3>Irmãos</h3>
        {formData.irmaos.map((irmao, index) => (
          <div key={index} className="irmao-group">
            <input
              className="cadastro-input"
              placeholder="Nome do irmão"
              value={irmao.nome}
              onChange={(e) => handleIrmaoChange(index, "nome", e.target.value)}
            />
            <input
              className="cadastro-input"
              placeholder="Idade do irmão"
              value={irmao.idade}
              onChange={(e) =>
                handleIrmaoChange(index, "idade", e.target.value)
              }
            />
            <input
              className="cadastro-input"
              placeholder="Escola do irmão"
              value={irmao.escola}
              onChange={(e) =>
                handleIrmaoChange(index, "escola", e.target.value)
              }
            />
            <input
              className="cadastro-input"
              placeholder="Série do irmão"
              value={irmao.serie}
              onChange={(e) =>
                handleIrmaoChange(index, "serie", e.target.value)
              }
            />
            <button
              type="button"
              className="remove-irmao-button"
              onClick={() => handleRemoveIrmao(index)}
            >
              Excluir
            </button>
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
          Atualizar
        </button>
      </form>
      {message && <p className="cadastro-message">{message}</p>}
    </div>
  );
};

export default ClientUpdate;
