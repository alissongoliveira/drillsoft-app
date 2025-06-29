import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./features/Login/LoginPage";
import HomePage from "./features/Home/HomePage";
import UsuariosPage from "./features/Usuarios/UsuariosPage";
import BalancaPage from "./features/Balanca/BalancaPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirecionamento da raiz para /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Tela de login */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/balanca" element={<BalancaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
