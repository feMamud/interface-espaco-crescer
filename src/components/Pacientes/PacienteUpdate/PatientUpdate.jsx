import { useState, useEffect } from "react";
import { updatePatient } from "../../../services/patient";
import { formatDateToISO, formatPhoneNumber } from "../../../utils/formatUtils";
import "./PatientUpdate.css";

const PatientUpdate = ({ patient, onClose }) => {
  const [formData, setFormData] = useState({
    nome: "",
    nascimento: "",
    telefone: "",
    endereco: "",
    responsavel: "",
    observacao: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (patient) {
      setFormData({
        nome: patient.nome || "",
        nascimento: patient.nascimento || "",
        telefone: formatPhoneNumber(patient.telefone) || "",
        endereco: patient.endereco || "",
        responsavel: patient.responsavel || "",
        observacao: patient.observacao || "",
      });
    }
  }, [patient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "telefone") {
      formattedValue = formatPhoneNumber(value);
      if (formattedValue.length > 15) return;
    }

    if (name === "nascimento") {
      const [year] = value.split("-");
      if (year.length > 4) return;
    }

    setFormData({ ...formData, [name]: formattedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanedPhone = formData.telefone.replace(/\D/g, "");
    if (cleanedPhone.length < 10 || cleanedPhone.length > 11) {
      setMessage("O número de telefone deve ter 10 ou 11 dígitos.");
      return;
    }

    const [year] = formData.nascimento.split("-");
    if (year.length !== 4) {
      setMessage("O ano da data de nascimento deve ter 4 dígitos.");
      return;
    }

    try {
      const updatedData = {
        ...formData,
        nascimento: formatDateToISO(formData.nascimento),
      };

      await updatePatient(patient.id, updatedData);
      setMessage("Paciente atualizado com sucesso!");
      onClose();
    } catch (error) {
      console.error(error);
      setMessage("Erro ao atualizar paciente.");
    }
  };

  return (
    <div className="cadastro-container">
      <h2 className="cadastro-title">Editar Paciente</h2>
      <form onSubmit={handleSubmit} className="cadastro-form">
        <input
          className="cadastro-input"
          type="text"
          name="nome"
          placeholder="Nome do Paciente"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          className="cadastro-input"
          type="date"
          name="nascimento"
          value={formData.nascimento}
          onChange={handleChange}
          required
        />
        <input
          className="cadastro-input"
          type="tel"
          name="telefone"
          placeholder="Celular (XX) XXXXX-XXXX"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
        <input
          className="cadastro-input"
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={formData.endereco}
          onChange={handleChange}
          required
        />
        <input
          className="cadastro-input"
          type="text"
          name="responsavel"
          placeholder="Responsável"
          value={formData.responsavel}
          onChange={handleChange}
        />
        <textarea
          className="cadastro-input"
          name="observacao"
          placeholder="Observações"
          value={formData.observacao}
          onChange={handleChange}
        />
        <button type="submit" className="cadastro-button">
          Atualizar
        </button>
      </form>
      {message && <p className="cadastro-message">{message}</p>}
    </div>
  );
};

export default PatientUpdate;
