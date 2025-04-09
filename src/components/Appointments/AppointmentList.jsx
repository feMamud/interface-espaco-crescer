import { useEffect, useState } from "react";
import { getAppointments, deleteAppointment } from "../../services/appointment";
import AppointmentForm from "./AppointmentForm/AppointmentForm";
import "./AppointmentList.css";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [selectedClient, setSelectedClient] = useState("todos");

  const [currentDesktopPage, setCurrentDesktopPage] = useState(0);
  const [currentMobileIndexFuturas, setCurrentMobileIndexFuturas] = useState(0);
  const [currentMobileIndexPassadas, setCurrentMobileIndexPassadas] =
    useState(0);

  const appointmentsPerPage = 3;

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const data = await getAppointments();
      setAppointments(data);
    } catch (error) {
      console.error("Erro ao buscar consultas:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Deseja excluir esta consulta?")) {
      await deleteAppointment(id);
      fetchAppointments();
    }
  };

  const today = new Date();

  const futuras = appointments.filter(
    (a) => new Date(`${a.date}T${a.time}`) >= today
  );
  const passadas = appointments.filter(
    (a) => new Date(`${a.date}T${a.time}`) < today
  );

  const uniqueNames = Array.from(
    new Set(
      appointments.map((a) => a.client?.name || a.patient?.nome).filter(Boolean)
    )
  );

  const filtrarPorNome = (lista) => {
    if (selectedClient === "todos") return lista;
    return lista.filter(
      (a) => (a.client?.name || a.patient?.nome) === selectedClient
    );
  };

  const isMobile = window.innerWidth <= 768;

  const renderCards = (data, titulo, currentIndex, setCurrentIndex) => {
    const filtrada = filtrarPorNome(data);
    const current = filtrada[currentIndex];

    if (!current) return null;

    return (
      <div>
        <h3 className="appointment-list-title">{titulo}</h3>
        <div className="appointment-card">
          <p>
            <strong>Data:</strong> {current.date}
          </p>
          <p>
            <strong>Hora:</strong> {current.time}
          </p>
          <p>
            <strong>Dia:</strong> {current.dayOfWeek}
          </p>
          <p>
            <strong>Cliente/Paciente:</strong>{" "}
            {current.client?.name || current.patient?.nome}
          </p>
          <div className="appointment-card-buttons">
            <button onClick={() => handleDelete(current.id)}>Excluir</button>
            <button onClick={() => setEditingAppointment(current)}>
              Editar
            </button>
          </div>
        </div>
        <div className="carousel-controls">
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? filtrada.length - 1 : prev - 1
              )
            }
          >
            ⬅️
          </button>
          <span>
            {currentIndex + 1} / {filtrada.length}
          </span>
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === filtrada.length - 1 ? 0 : prev + 1
              )
            }
          >
            ➡️
          </button>
        </div>
      </div>
    );
  };

  const renderTable = (data, titulo) => {
    const startIndex = currentDesktopPage * appointmentsPerPage;
    const endIndex = startIndex + appointmentsPerPage;
    const paginatedData = filtrarPorNome(data).slice(startIndex, endIndex);

    return (
      <div>
        <h3 className="appointment-list-title">{titulo}</h3>
        {paginatedData.length === 0 ? (
          <p className="appointment-list-title">Nenhuma consulta</p>
        ) : (
          <table className="appointment-list-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Hora</th>
                <th>Dia da Semana</th>
                <th>Cliente/Paciente</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((a) => (
                <tr key={a.id}>
                  <td data-label="Data">{a.date}</td>
                  <td data-label="Hora">{a.time}</td>
                  <td data-label="Dia da Semana">{a.dayOfWeek}</td>
                  <td data-label="Cliente/Paciente">
                    {a.client?.name || a.patient?.nome}
                  </td>
                  <td data-label="Ações">
                    <button
                      className="appointment-list-delete-btn"
                      onClick={() => handleDelete(a.id)}
                    >
                      Excluir
                    </button>
                    <button
                      className="appointment-list-delete-btn"
                      onClick={() => setEditingAppointment(a)}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {filtrarPorNome(data).length > appointmentsPerPage && (
          <div className="pagination-controls">
            <button
              onClick={() =>
                setCurrentDesktopPage((prev) =>
                  prev === 0
                    ? Math.floor(
                        filtrarPorNome(data).length / appointmentsPerPage
                      )
                    : prev - 1
                )
              }
            >
              ⬅️
            </button>
            <span>
              Página {currentDesktopPage + 1} de{" "}
              {Math.ceil(filtrarPorNome(data).length / appointmentsPerPage)}
            </span>
            <button
              onClick={() =>
                setCurrentDesktopPage((prev) =>
                  (prev + 1) * appointmentsPerPage >=
                  filtrarPorNome(data).length
                    ? 0
                    : prev + 1
                )
              }
            >
              ➡️
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="mae-appointment-list">
      <div className="appointment-list-container">
        <h2>Consultas</h2>
        <button onClick={() => setIsAdding(true)}>Nova Consulta</button>

        {isMobile && (
          <select
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            className="appointment-client-select"
          >
            <option value="todos">Todos os clientes</option>
            {uniqueNames.map((nome) => (
              <option key={nome} value={nome}>
                {nome}
              </option>
            ))}
          </select>
        )}

        {isMobile ? (
          <>
            {renderCards(
              futuras,
              "Próximas Consultas",
              currentMobileIndexFuturas,
              setCurrentMobileIndexFuturas
            )}
            {renderCards(
              passadas,
              "Consultas Passadas",
              currentMobileIndexPassadas,
              setCurrentMobileIndexPassadas
            )}
          </>
        ) : (
          <>
            {renderTable(futuras, "Próximas Consultas")}
            {renderTable(passadas, "Consultas Passadas")}
          </>
        )}

        {(isAdding || editingAppointment) && (
          <div className="modal">
            <div className="modal-content">
              <button
                onClick={() => {
                  setIsAdding(false);
                  setEditingAppointment(null);
                }}
              >
                Fechar
              </button>
              <AppointmentForm
                onClose={() => {
                  setIsAdding(false);
                  setEditingAppointment(null);
                  fetchAppointments();
                }}
                initialData={editingAppointment}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentList;
