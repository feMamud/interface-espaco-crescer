import { BrowserRouter as Roteador, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Espaco from "./pages/Espaco/Espaco";
import Psicopedagogia from "./pages/Psicopedagogia/Psicopedagogia";
import Psicanalise from "./pages/Psicanalise/Psicanalise";
import Contato from "./pages/Contato/Contato";
import Organizacao from "./pages/Organizacao/Organizacao";
import Cliente from "./pages/Cliente/Cliente";
import Paciente from './pages/Paciente/Paciente';
import Appointment from './pages/Appointment/Appointmente';
import CalendarioConsultas from './components/CalendarioConsultas/CalendarioConsultas';
import PrivateRoute from "./components/PrivateRoutes/PrivateRoutes";
import Login from './components/Login/Login';
import { useState, useEffect } from "react";
import { getProfile } from "./api/auth"; // 👈 importar

function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      const profile = await getProfile();
      setIsAuthenticated(!!profile);
      setLoading(false);
    }

    checkAuth();
  }, []);

  if (loading) return null; // ou algum <Loading />

  return (
    <Roteador>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/espaco" Component={Espaco} />
        <Route path="/psicopedagogia" Component={Psicopedagogia} />
        <Route path="/psicanalise" Component={Psicanalise} />
        <Route path="/contato" Component={Contato} />
        <Route path="/login" Component={Login} />

        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/organizacao" Component={Organizacao} />
          <Route path="/clientes" Component={Cliente} />
          <Route path="/pacientes" Component={Paciente} />
          <Route path="/consultas" Component={Appointment} />
          <Route path="/calendario" Component={CalendarioConsultas} />
        </Route>
      </Routes>
    </Roteador>
  );
}

export default AppRoutes;
