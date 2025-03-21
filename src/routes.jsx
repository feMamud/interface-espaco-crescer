// Importa os componentes necessários do react-router-dom para configurar o roteamento
import { BrowserRouter as Roteador, Routes, Route } from 'react-router-dom';
// Importa o componente Home que representa a página inicial da aplicação
import Home from './pages/Home/Home';
//
import Espaco from './pages/Espaco/Espaco';
//
import Psicopedagogia from './pages/Psicopedagogia/Psicopedagogia';
//
import Psicanalise from './pages/Psicanalise/Psicanalise';

// Função que configura as rotas da aplicação
function AppRoutes() {
    return (
        <>
            {/* Configura o roteador para gerenciar as rotas da aplicação */}
            <Roteador>
                {/* Define as rotas da aplicação */}
                <Routes>
                    {/* Define a rota para a página inicial */}
                    <Route exact path='/' Component={Home} />
                    <Route path='/espaco' Component={Espaco} />
                    <Route path='/psicopedagogia' Component={Psicopedagogia} />
                    <Route path='psicanalise' Component={Psicanalise} />
                </Routes>
            </Roteador>
        </>
    );
}

// Exporta o componente AppRoutes para ser usado na configuração do roteamento da aplicação
export default AppRoutes;
