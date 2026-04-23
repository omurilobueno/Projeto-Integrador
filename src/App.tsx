import { Routes, Route, Navigate } from "react-router-dom";

import Cadastro from "./paginas/Cadastro";
import Lista from "./paginas/Lista";
import Login from "./paginas/Login";
import NotFound from "./paginas/NotFound";

function App() {
  return (
    <Routes>

      {/* REDIRECIONAMENTO INICIAL */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* ROTAS PRINCIPAIS */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/lista" element={<Lista />} />

      {/* ROTA DE ERRO */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;