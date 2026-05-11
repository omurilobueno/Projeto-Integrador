import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Pill, Clock, Save, List, LogOut } from "lucide-react";
import logoImg from "../assets/logo.png";
import "../../style/style.css";

function Cadastro() {
  const navigate = useNavigate();
  const [paciente, setPaciente] = useState("");
  const [medicamento, setMedicamento] = useState("");
  const [horario, setHorario] = useState("");

  const salvar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paciente || !medicamento || !horario) return alert("Preencha todos os campos!");

    const listaAtual = JSON.parse(localStorage.getItem("medicamentos") || "[]");
    const novo = { id: Date.now(), paciente, medicamento, horario };
    
    localStorage.setItem("medicamentos", JSON.stringify([...listaAtual, novo]));
    alert("Cadastrado com sucesso!");
    navigate("/lista");
  };

  return (
    <div className="app-cadastro">
      <header className="header-cadastro">
        <div className="header-container">
          <Link to="/lista" className="logo-link">
            <img src={logoImg} alt="Medicine Time" className="logo-site" />
          </Link>
          <nav className="menu-cadastro">
            <Link to="/lista" className="link-menu-lista"><List size={18} /> Lista</Link>
            <button className="btn-sair-simples" onClick={() => navigate("/login")}><LogOut size={18} /> Sair</button>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="card-cadastro">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Novo Cadastro</h2>
          <form onSubmit={salvar}>
            <div className="input-icon"><User size={18} /><input type="text" placeholder="Nome do Paciente" value={paciente} onChange={e => setPaciente(e.target.value)} /></div>
            <div className="input-icon"><Pill size={18} /><input type="text" placeholder="Medicamento" value={medicamento} onChange={e => setMedicamento(e.target.value)} /></div>
            <div className="input-icon"><Clock size={18} /><input type="time" value={horario} onChange={e => setHorario(e.target.value)} /></div>
            <div className="acoes-cadastro">
              <button type="submit" className="btn-salvar"><Save size={20} /> Finalizar Cadastro</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Cadastro;