import { Routes, Route, Navigate } from "react-router-dom";

import Cadastro from "./paginas/Cadastro";
import Lista from "./paginas/Lista";
import Login from "./paginas/Login";
import NotFound from "./paginas/NotFound";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Main routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />


      {/* ROTA DE ERRO */}
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/lista/:nome" element={<Lista />} />
    </Routes>
  );
}

export default App;