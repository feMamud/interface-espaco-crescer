export const formatDateToISO = (dateString) => {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-");
  
  // Garante que o ano tenha exatamente 4 dígitos
  if (year.length !== 4) return "";

  return `${year}-${month}-${day}`;
};


export const formatPhoneNumber = (phone) => {
  if (!phone) return "";

  // Remove tudo que não for número
  const cleaned = phone.replace(/\D/g, "");

  // Aplica a formatação para telefone BR
  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  } else if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
  }

  return phone; // Retorna sem alteração se não estiver no formato correto
};
