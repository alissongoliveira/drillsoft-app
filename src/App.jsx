import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./features/Login/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirecionamento da raiz para /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Tela de login */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
