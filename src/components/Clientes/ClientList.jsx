import { useEffect, useState } from "react";
import { getClients, deleteClient } from "../../services/client";
import ClientForm from "./ClientForm/ClientForm";
import ClientUpdate from "./ClientUptade/ClientUpdate";
import "./ClientList.css";

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const data = await getClients();
      setClients(data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este cliente?")) {
      try {
        await deleteClient(id);
        fetchClients();
      } catch (error) {
        console.error("Erro ao excluir cliente:", error);
      }
    }
  };

  if (loading) return <p className="loading-text">Carregando clientes...</p>;
  if (clients.length === 0) return <p className="no-clients-text">Nenhum cliente cadastrado.</p>;

  return (
    <div className="mae-client-list-container">
      <div className="client-list-container">
        <h2 className="client-list-title">Lista de Clientes</h2>
        <button className="client-button-add" onClick={() => setIsAdding(true)}>
          Cadastrar Cliente
        </button>
        <table className="table-client-list">
          <thead>
            <tr>
              <th className="client-th">Nome</th>
              <th className="client-th">Nascimento</th>
              <th className="client-th">Realizado com</th>
              <th className="client-th">Mãe</th>
              <th className="client-th">Pai</th>
              <th className="client-th">Telefone</th>
              <th className="client-th">Endereço</th>
              <th className="client-th">Ações</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="client-row">
                <td className="client-td">{client.name}</td>
                <td className="client-td">{client.birthDate}</td>
                <td className="client-td">{client.realizadoCom}</td>
                <td className="client-td">{client.mae}</td>
                <td className="client-td">{client.pai}</td>
                <td className="client-td">{client.phone}</td>
                <td className="client-td">{client.address}</td>
                <td className="client-actions">
                  <button
                    className="client-button-edit"
                    onClick={() => {
                      setSelectedClient(client);
                      setIsEditing(true);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="client-button-delete"
                    onClick={() => handleDelete(client.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isAdding && (
          <div className="client-modal">
            <div className="client-modal-content">
              <button className="client-modal-close" onClick={() => setIsAdding(false)}>×</button>
              <ClientForm onClose={() => { setIsAdding(false); fetchClients(); }} />
            </div>
          </div>
        )}

        {isEditing && selectedClient && (
          <div className="client-modal">
            <div className="client-modal-content">
              <button className="client-modal-close" onClick={() => setIsEditing(false)}>×</button>
              <ClientUpdate client={selectedClient} onClose={() => { setIsEditing(false); fetchClients(); }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientList;
