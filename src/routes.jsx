import { BrowserRouter as Roteador, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Espaco from "./pages/Espaco/Espaco";
import Psicopedagogia from "./pages/Psicopedagogia/Psicopedagogia";
import Psicanalise from "./pages/Psicanalise/Psicanalise";
import Contato from "./pages/Contato/Contato";
import Organizacao from "./pages/Organizacao/Organizacao";
import Cliente from "./pages/Cliente/Cliente";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoutes";
import { useState, useEffect } from "react";

function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", checkAuth); // Detecta logout de outras abas
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return (
    <Roteador>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/espaco" Component={Espaco} />
        <Route path="/psicopedagogia" Component={Psicopedagogia} />
        <Route path="/psicanalise" Component={Psicanalise} />
        <Route path="/contato" Component={Contato} />

        {/* Rotas protegidas */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/organizacao" Component={Organizacao} />
          <Route path="/organizacao/clientes" Component={Cliente} />
        </Route>
      </Routes>
    </Roteador>
  );
}

export default AppRoutes;
