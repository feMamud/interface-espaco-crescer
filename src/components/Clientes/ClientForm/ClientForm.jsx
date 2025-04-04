import { useState } from "react";
import { registerClient } from "../../../services/client";
import { formatDateToISO, formatPhoneNumber } from "../../../utils/formatUtils";
import "./ClientForm.css";

const ClientForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    guardianName: "",
    phone: "",
    address: "",
    appointmentTime: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === "phone") {
      formattedValue = formatPhoneNumber(value);

      // Impede que o usuário digite mais de 15 caracteres formatados ((XX) XXXXX-XXXX)
      if (formattedValue.length > 15) {
        return;
      }
    }

    if (name === "birthDate") {
      // Garante que o ano tenha no máximo 4 dígitos
      const [year, month, day] = value.split("-");
      if (year && year.length > 4) {
        return;
      }
    }

    setFormData({ ...formData, [name]: formattedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se o telefone tem 10 ou 11 dígitos antes de enviar
    const cleanedPhone = formData.phone.replace(/\D/g, "");
    if (cleanedPhone.length < 10 || cleanedPhone.length > 11) {
      setMessage("O número de telefone deve ter 10 ou 11 dígitos.");
      return;
    }

    // Verifica se o ano da data tem exatamente 4 dígitos
    const [year] = formData.birthDate.split("-");
    if (year.length !== 4) {
      setMessage("O ano da data de nascimento deve ter 4 dígitos.");
      return;
    }

    try {
      const formattedData = {
        ...formData,
        birthDate: formatDateToISO(formData.birthDate),
      };

      await registerClient(formattedData);
      setMessage("Cliente cadastrado com sucesso!");
      setFormData({
        name: "",
        birthDate: "",
        guardianName: "",
        phone: "",
        address: "",
        appointmentTime: "",
      });
      onClose();
    } catch (error) {
      setMessage("Erro ao cadastrar cliente.");
    }
  };

  return (
    <div className="cadastro-container">
      <h2 className="cadastro-title">Cadastrar Cliente</h2>
      <form onSubmit={handleSubmit} className="cadastro-form">
        <input
          className="cadastro-input"
          type="text"
          name="name"
          placeholder="Nome do Cliente"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="cadastro-input"
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          required
        />
        <input
          className="cadastro-input"
          type="text"
          name="guardianName"
          placeholder="Nome do Responsável"
          value={formData.guardianName}
          onChange={handleChange}
        />
        <input
          className="cadastro-input"
          type="tel"
          name="phone"
          placeholder="Celular (XX) XXXXX-XXXX"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          className="cadastro-input"
          type="text"
          name="address"
          placeholder="Endereço"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          className="cadastro-input"
          type="time"
          name="appointmentTime"
          value={formData.appointmentTime}
          onChange={handleChange}
          required
        />
        <button type="submit" className="cadastro-button">
          Cadastrar
        </button>
      </form>
      {message && <p className="cadastro-message">{message}</p>}
    </div>
  );
};

export default ClientForm;
