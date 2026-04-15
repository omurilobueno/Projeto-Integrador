import { Link } from "react-router-dom";
import "../../style/style.css"
import { useState } from "react";
import { User, IdCard, Pill, Clock, Trash2, Pencil, Save, Search } from "lucide-react";

function Cadastro() {
  const [modal, setModal] = useState("");

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <h1 className="logo">Logo</h1>

        <div className="menu">
          <span>Início</span>
          <button className="btn-sair">Sair</button>
        </div>
      </header>

      {/* BUSCA */}
      <div className="busca">
        <div className="input-busca">
          <input type="text" placeholder="Pesquisar Paciente" />
          <Search size={18} />
        </div>
      </div>

      {/* CARD */}
      <div className="card">

        <h3>Dados do Paciente</h3>

        <div className="input-icon">
          <User size={16} />
          <input type="text" placeholder="Nome do paciente" />
        </div>

        <div className="input-icon">
          <IdCard size={16} />
          <input type="text" placeholder="CPF" />
        </div>

        <h3>Data da medicação</h3>

        <div className="input-icon">
          <Pill size={16} />
          <input type="text" placeholder="Medicamento" />
        </div>

        <div className="linha">
          <div className="input-icon">
            <Pill size={16} />
            <input type="text" placeholder="Dose" />
          </div>

          <div className="input-icon">
            <Clock size={16} />
            <input type="time" />
          </div>
        </div>

        {/* BOTÕES */}
        <div className="acoes">
          <button className="btn" onClick={() => setModal("excluido")}>
            <Trash2 size={16} />
          </button>

          <button className="btn">
            <Pencil size={16} />
          </button>

          <button className="btn" onClick={() => setModal("salvo")}>
            <Save size={16} />
          </button>
        </div>
      </div>

      {/* MODAL */}
      {modal && (
        <div className="overlay" onClick={() => setModal("")}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            
            {modal === "excluido" && (
              <p>Cadastro excluído com sucesso!</p>
            )}

            {modal === "salvo" && (
              <p>Cadastro realizado com sucesso!</p>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

export default Cadastro;