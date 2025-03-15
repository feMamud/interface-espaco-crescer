// Importa o arquivo CSS para estilização global da aplicação
import './App.css';

// Importa o componente AppRoutes que define as rotas da aplicação
import AppRoutes from './routes';

// Define o componente principal App
function App() {

  return (
    <>
      {/* Renderiza o componente AppRoutes, que gerencia as rotas e navegação da aplicação */}
      <AppRoutes />
    </>
  );
}

// Exporta o componente App para que possa ser utilizado como ponto de entrada da aplicação
export default App;
