import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="text-2xl p-4">DrillSoft - Dashboard Inicial</div>} />
      </Routes>
    </Router>
  );
}

export default App;
