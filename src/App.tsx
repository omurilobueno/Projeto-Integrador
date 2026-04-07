import { Route, Routes } from "react-router-dom";
import Lista from "./paginas/Lista";
import Login from "./paginas/Login";
import Cadastro from "./paginas/Cadastro";
import NotFound from "./paginas/notFound";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/lista" element={<Lista />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;