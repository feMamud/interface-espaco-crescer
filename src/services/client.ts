import api from '../api/axiosConfig';

const API_URL = '/clients';

export const registerClient = async (clientData: {
  realizadoCom: string;
  name: string;
  birthDate: string;
  naturalidade: string;
  escola: string;
  serie: string;
  cordenadora: string;
  professora: string;
  mae: string;
  idade_mae: string;
  formacao_mae: string;
  profissao_mae: string;
  pai: string;
  idade_pai: string;
  formacao_pai: string;
  profissao_pai: string;
  pais_juntos: string;
  RG_responsavel: string;
  CPF_responsavel: string;
  address: string;
  phone: string;
  celular: string;
  reforco_escolar: string;
  atividades_extras: string;
  outros_acompanhamentos: string;
  quem_indicou: string;
  queixa: string;
  valor_sessao: string;
  forma_pagamento: string;
  irmaos?: {
    nome_irmao: string;
    idade_irmao: string;
    escola_irmao: string;
    serie_irmao: string;
  }[];
}) => {
  const response = await api.post(`${API_URL}`, clientData);
  return response.data;
};

export const getClients = async () => {
  const response = await api.get(`${API_URL}`);
  return response.data;
};

export const getClientById = async (id: number) => {
  const response = await api.get(`${API_URL}/${id}`);
  return response.data;
};

export const updateClient = async (
  id: number,
  clientData: Partial<{
    realizadoCom: string;
    name: string;
    birthDate: string;
    naturalidade: string;
    escola: string;
    serie: string;
    cordenadora: string;
    professora: string;
    mae: string;
    idade_mae: string;
    formacao_mae: string;
    profissao_mae: string;
    pai: string;
    idade_pai: string;
    formacao_pai: string;
    profissao_pai: string;
    pais_juntos: string;
    RG_responsavel: string;
    CPF_responsavel: string;
    address: string;
    phone: string;
    celular: string;
    reforco_escolar: string;
    atividades_extras: string;
    outros_acompanhamentos: string;
    quem_indicou: string;
    queixa: string;
    valor_sessao: string;
    forma_pagamento: string;
    irmaos?: {
      nome_irmao: string;
      idade_irmao: string;
      escola_irmao: string;
      serie_irmao: string;
    }[];
  }>
) => {
  const response = await api.put(`${API_URL}/${id}`, clientData);
  return response.data;
};

export const deleteClient = async (id: number) => {
  const response = await api.delete(`${API_URL}/${id}`);
  return response.data;
};
