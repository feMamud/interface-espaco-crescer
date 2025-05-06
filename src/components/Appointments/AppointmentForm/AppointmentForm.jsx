import { useState, useEffect } from "react";
import {
  createAppointment,
  updateAppointment,
} from "../../../services/appointment";
import { getClients } from "../../../services/client";
import { getPatients } from "../../../services/patient";
import "./AppointmentForm.css";

const AppointmentForm = ({ onClose, initialData }) => {
  const isEditing = !!initialData;

  const [clients, setClients] = useState([]);
  const [patients, setPatients] = useState([]);

  const [formData, setFormData] = useState({
    date: initialData?.date || "",
    time: initialData?.time || "",
    clientId: initialData?.clientId ? String(initialData.clientId) : "",
    patientId: initialData?.patientId ? String(initialData.patientId) : "",
    status: initialData?.status || "pendente",
    repeatUntil: "", // <- NOVO
  });

  useEffect(() => {
    fetchClients();
    fetchPatients();
  }, []);

  const fetchClients = async () => {
    try {
      const data = await getClients();
      setClients(data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  const fetchPatients = async () => {
    try {
      const data = await getPatients();
      setPatients(data);
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "clientId" && value) {
      setFormData((prev) => ({ ...prev, clientId: value, patientId: "" }));
    } else if (name === "patientId" && value) {
      setFormData((prev) => ({ ...prev, patientId: value, clientId: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.clientId && !formData.patientId) {
      alert("Você deve selecionar um cliente ou um paciente.");
      return;
    }

    const cleanData = {
      ...formData,
      clientId: formData.clientId ? Number(formData.clientId) : null,
      patientId: formData.patientId ? Number(formData.patientId) : null,
    };

    // Remover repeatUntil se estiver vazio
    if (!cleanData.repeatUntil) {
      delete cleanData.repeatUntil;
    }

    try {
      const confirmMsg = isEditing
        ? "Deseja salvar as alterações?"
        : "Deseja cadastrar esta consulta?";
      if (!window.confirm(confirmMsg)) return;

      if (isEditing) {
        if (!initialData?.id) {
          console.error("ID da consulta ausente ou inválido.");
          return;
        }
        await updateAppointment(initialData.id, cleanData);
      } else {
        await createAppointment(cleanData);
      }
      onClose();
    } catch (error) {
      console.error("Erro ao salvar consulta:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <h2 className="appointment-form-title">
        {isEditing ? "Editar Consulta" : "Nova Consulta"}
      </h2>

      <div className="appointment-form-group">
        <label className="appointment-form-label">Data:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="appointment-form-input"
        />
      </div>

      <div className="appointment-form-group">
        <label className="appointment-form-label">Hora:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="appointment-form-input"
        />
      </div>

      <div className="appointment-form-group">
        <label className="appointment-form-label">Cliente:</label>
        <select
          name="clientId"
          value={formData.clientId}
          onChange={handleChange}
          disabled={!!formData.patientId}
          className="appointment-form-select"
        >
          <option value="">Selecione um cliente</option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>
      </div>

      <div className="appointment-form-group">
        <label className="appointment-form-label">Paciente:</label>
        <select
          name="patientId"
          value={formData.patientId}
          onChange={handleChange}
          disabled={!!formData.clientId}
          className="appointment-form-select"
        >
          <option value="">Selecione um paciente</option>
          {patients.map((patient) => (
            <option key={patient.id} value={patient.id}>
              {patient.nome} - {patient.responsavel || "sem responsável"}
            </option>
          ))}
        </select>
      </div>

      <div className="appointment-form-group">
        <label className="appointment-form-label">Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="appointment-form-select"
        >
          <option value="pendente">Pendente</option>
          <option value="realizada">Realizada</option>
          <option value="cancelada">Cancelada</option>
        </select>
      </div>

      {!isEditing && (
        <div className="appointment-form-group">
          <label className="appointment-form-label">
            Repetir semanalmente até (opcional):
          </label>
          <input
            type="date"
            name="repeatUntil"
            value={formData.repeatUntil}
            onChange={handleChange}
            className="appointment-form-input"
            min={formData.date} // evita datas anteriores
          />
          <small className="appointment-form-hint">
            Será criada uma consulta por semana até essa data.
          </small>
        </div>
      )}

      <div className="appointment-form-buttons">
        <button type="submit" className="appointment-form-submit">
          {isEditing ? "Salvar Alterações" : "Cadastrar"}
        </button>
        <button
          type="button"
          className="appointment-form-cancel"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default AppointmentForm;
