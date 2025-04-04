import { useState, useEffect } from "react";
import { updateClient } from "../../../services/client";
import { formatDateToISO, formatPhoneNumber } from "../../../utils/formatUtils";
import "./ClientUpdate.css";

const ClientUpdate = ({ client, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    guardianName: "",
    phone: "",
    address: "",
    appointmentTime: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (client) {
      setFormData({
        name: client.name || "",
        birthDate: client.birthDate || "",
        guardianName: client.guardianName || "",
        phone: formatPhoneNumber(client.phone) || "",
        address: client.address || "",
        appointmentTime: client.appointmentTime || "",
      });
    }
  }, [client]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === "phone") {
      formattedValue = formatPhoneNumber(value);
      if (formattedValue.length > 15) return;
    }

    if (name === "birthDate") {
      const [year, month, day] = value.split("-");
      if (year && year.length > 4) return;
    }

    setFormData({ ...formData, [name]: formattedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanedPhone = formData.phone.replace(/\D/g, "");
    if (cleanedPhone.length < 10 || cleanedPhone.length > 11) {
      setMessage("O número de telefone deve ter 10 ou 11 dígitos.");
      return;
    }

    const [year] = formData.birthDate.split("-");
    if (year.length !== 4) {
      setMessage("O ano da data de nascimento deve ter 4 dígitos.");
      return;
    }

    try {
      const updatedData = {
        ...formData,
        birthDate: formatDateToISO(formData.birthDate),
      };

      await updateClient(client.id, updatedData);
      setMessage("Cliente atualizado com sucesso!");
      onClose();
    } catch (error) {
      setMessage("Erro ao atualizar cliente.");
    }
  };

  return (
    <div className="cadastro-container">
      <h2 className="cadastro-title">Editar Cliente</h2>
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
          Atualizar
        </button>
      </form>
      {message && <p className="cadastro-message">{message}</p>}
    </div>
  );
};

export default ClientUpdate;
