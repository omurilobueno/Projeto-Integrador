import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LogOut,User, IdCard, Pill, Clock, Trash2, Pencil, Save, Search, List } from "lucide-react";
import "../../style/style.css";

function Cadastro() {
  const [modal, setModal] = useState("");
  const navigate = useNavigate();

  return (
    <div className="app-cadastro">

       {/* HEADER */}
      <header className="header-cadastro">
        <h1 className="logo-cadastro">Logo</h1>
        <div className="menu-cadastro">
          <Link to="/lista" className="link-menu-lista">
            <List size={18} />
            Lista
          </Link>

          <button onClick={() => navigate("/login")} className="btn-sair-header">
              <LogOut size={18} />
              Sair
            </button>
        </div>
      </header>

      

      <div className="card-cadastro">
        <h3 className="section-title">Dados do Paciente</h3>
        <div className="input-icon">
          <User size={16} />
          <input type="text" placeholder="Nome do paciente" />
        </div>
        <div className="input-icon">
          <IdCard size={16} />
          <input type="text" placeholder="CPF" />
        </div>

        <h3 className="section-title">Data da medicação</h3>
        <div className="input-icon">
          <Pill size={16} />
          <input type="text" placeholder="Medicamento" />
        </div>

        <div className="linha-cadastro">
          <div className="input-icon">
            <Pill size={16} />
            <input type="text" placeholder="Dose" />
          </div>
          <div className="input-icon">
            <Clock size={16} />
            <input type="time" />
          </div>
        </div>

        <div className="acoes-cadastro">
          <button className="btn-acao btn-excluir" onClick={() => setModal("excluido")}>
            <Trash2 size={16} />
          </button>
          <button className="btn-acao btn-editar">
            <Pencil size={16} />
          </button>
          <button className="btn-acao btn-salvar" onClick={() => setModal("salvo")}>
            <Save size={16} />
          </button>
        </div>
      </div>

      {modal && (
        <div className="overlay" onClick={() => setModal("")}>
          <div className="modal-aviso" onClick={(e) => e.stopPropagation()}>
            {modal === "excluido" ? <p>Cadastro excluído com sucesso!</p> : <p>Cadastro realizado com sucesso!</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cadastro;