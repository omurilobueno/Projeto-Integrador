import { Route, Routes } from "react-router-dom";
import Lista from "./paginas/Lista";
import Login from "./paginas/Login";
import Cadastro from "./paginas/Cadastro";
import NotFound from "./paginas/NotFound";
import Contador from "./paginas/contador";
import Props from "./paginas/props";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/lista/:nome" element={<Lista />} />
      <Route path="/lista" element={<Lista />} />
      <Route path="/contador" element={<Contador />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/props" element={<Props />} />
    </Routes>
  );
}

export default App;