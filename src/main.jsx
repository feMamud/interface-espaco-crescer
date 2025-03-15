// Importa a biblioteca React para poder utilizar JSX e outros recursos do React
import React from 'react';
// Importa o método ReactDOM para manipular o DOM e renderizar o aplicativo React
import ReactDOM from 'react-dom/client';
// Importa o componente principal App, que é o ponto de entrada da aplicação
import App from './App.jsx';
// Importa o arquivo CSS para estilização global da aplicação
import './index.css';


// Cria e renderiza a aplicação React no elemento com id 'root' do DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  // Envolve o componente App em React.StrictMode para habilitar verificações e avisos de desenvolvimento
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
