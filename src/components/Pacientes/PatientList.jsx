import { useEffect, useState } from "react";
import { getPatients, deletePatient } from "../../services/patient";
import PatientForm from "./PacienteForm/PatientForm";
import PatientUpdate from "./PacienteUpdate/PatientUpdate";
import ObservacoesModal from "./ObservacoesModal/ObservacoesModal";
import "./PatientList.css";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedObservacoes, setSelectedObservacoes] = useState("");
  const [isObservacoesOpen, setIsObservacoesOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [page, setPage] = useState(0);
  const patientsPerPage = 3;

  const paginatedPatients = patients.slice(
    page * patientsPerPage,
    page * patientsPerPage + patientsPerPage
  );

  const nextPage = () => {
    if ((page + 1) * patientsPerPage < patients.length) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const data = await getPatients();
      setPatients(data);
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este paciente?")) {
      try {
        await deletePatient(id);
        fetchPatients();
      } catch (error) {
        console.error("Erro ao excluir paciente:", error);
      }
    }
  };

  const nextPatient = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === patients.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPatient = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? patients.length - 1 : prevIndex - 1
    );
  };

  if (loading) return <p className="loading-text">Carregando pacientes...</p>;

  return (
    <div className="mae-patient-list-container">
      <div className="patient-list-container">
        <h2 className="patient-list-title">Lista de Pacientes</h2>
        <button
          className="patient-button-add"
          onClick={() => setIsAdding(true)}
        >
          Cadastrar Paciente
        </button>

        {/* Desktop: Tabela */}
        <div className="patient-table-desktop">
          {patients.length === 0 ? (
            <p className="no-patients-text">Nenhum paciente cadastrado.</p>
          ) : (
            <>
              <table className="table-patient-list">
                <thead>
                  <tr>
                    <th className="patient-th">Nome</th>
                    <th className="patient-th">Data de Nascimento</th>
                    <th className="patient-th">Telefone</th>
                    <th className="patient-th">Endereço</th>
                    <th className="patient-th">Responsável</th>
                    <th className="patient-th">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedPatients.map((patient) => (
                    <tr key={patient.id} className="patient-row">
                      <td className="patient-td">{patient.nome}</td>
                      <td className="patient-td">
                        {new Date(patient.nascimento).toLocaleDateString()}
                      </td>
                      <td className="patient-td">{patient.telefone}</td>
                      <td className="patient-td">{patient.endereco}</td>
                      <td className="patient-td">{patient.responsavel}</td>
                      <td className="patient-actions">
                        <button
                          className="patient-button-view"
                          onClick={() => {
                            setSelectedObservacoes(
                              patient.observacao || "Sem observações."
                            );
                            setSelectedPatient(patient);
                            setIsObservacoesOpen(true);
                          }}
                        >
                          Observações
                        </button>
                        <button
                          className="patient-button-edit"
                          onClick={() => {
                            setSelectedPatient(patient);
                            setIsEditing(true);
                          }}
                        >
                          Editar
                        </button>
                        <button
                          className="patient-button-delete"
                          onClick={() => handleDelete(patient.id)}
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Paginação da tabela */}
              <div className="pagination-buttons">
                <button
                  onClick={prevPage}
                  disabled={page === 0}
                  className="patient-button-view"
                >
                  ⬅ Anterior
                </button>
                <button
                  onClick={nextPage}
                  disabled={(page + 1) * patientsPerPage >= patients.length}
                  className="patient-button-view"
                >
                  Próximo ➡
                </button>
              </div>
            </>
          )}
        </div>

        {/* Mobile: Carrossel */}
        <div className="patient-carousel-mobile">
          {patients.length === 0 ? (
            <p className="no-patients-text">Nenhum paciente cadastrado.</p>
          ) : (
            <>
              <div className="patient-card">
                <p><strong>Nome:</strong> {patients[currentIndex].nome}</p>
                <p><strong>Nascimento:</strong> {new Date(patients[currentIndex].nascimento).toLocaleDateString()}</p>
                <p><strong>Telefone:</strong> {patients[currentIndex].telefone}</p>
                <p><strong>Endereço:</strong> {patients[currentIndex].endereco}</p>
                <p><strong>Responsável:</strong> {patients[currentIndex].responsavel}</p>
                <div className="patient-actions">
                  <button
                    className="patient-button-view"
                    onClick={() => {
                      setSelectedObservacoes(
                        patients[currentIndex].observacao || "Sem observações."
                      );
                      setSelectedPatient(patients[currentIndex]);
                      setIsObservacoesOpen(true);
                    }}
                  >
                    Observações
                  </button>
                  <button
                    className="patient-button-edit"
                    onClick={() => {
                      setSelectedPatient(patients[currentIndex]);
                      setIsEditing(true);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="patient-button-delete"
                    onClick={() => handleDelete(patients[currentIndex].id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
              <div className="carousel-controls">
                <button onClick={prevPatient}>⬅️</button>
                <span>{currentIndex + 1} / {patients.length}</span>
                <button onClick={nextPatient}>➡️</button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Modais */}
      {isAdding && (
        <div className="patient-modal">
          <div className="patient-modal-content">
            <button
              className="patient-modal-close"
              onClick={() => setIsAdding(false)}
            >
              ×
            </button>
            <PatientForm
              onClose={() => {
                setIsAdding(false);
                fetchPatients();
              }}
            />
          </div>
        </div>
      )}

      {isEditing && selectedPatient && (
        <div className="patient-modal">
          <div className="patient-modal-content">
            <button
              className="patient-modal-close"
              onClick={() => setIsEditing(false)}
            >
              ×
            </button>
            <PatientUpdate
              patient={selectedPatient}
              onClose={() => {
                setIsEditing(false);
                fetchPatients();
              }}
            />
          </div>
        </div>
      )}

      {isObservacoesOpen && (
        <ObservacoesModal onClose={() => setIsObservacoesOpen(false)}>
          <h3>Observações do Paciente {selectedPatient?.nome}</h3>
          <p>{selectedObservacoes || "Sem observações."}</p>
        </ObservacoesModal>
      )}
    </div>
  );
};

export default PatientList;
