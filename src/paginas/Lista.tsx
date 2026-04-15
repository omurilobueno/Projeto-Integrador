import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, PlusCircle, ClipboardList } from "lucide-react"; // Importação dos ícones
import "../../style/style.css"
function Lista() {
  const navigate = useNavigate();
  
  const [medicamentos, setMedicamentos] = useState([
    { id: 1, paciente: "Nome do Paciente", medicamento: "Nome do Medicamento", horario: "08:00", status: "Administrado" },
    { id: 2, paciente: "Nome do Paciente", medicamento: "Nome do Medicamento", horario: "08:00", status: "Administrado" },
    { id: 3, paciente: "Nome do Paciente", medicamento: "Nome do Medicamento", horario: "08:00", status: "Administrado" },
    { id: 4, paciente: "Nome do Paciente", medicamento: "Nome do Medicamento", horario: "08:00", status: "Administrado" },
    { id: 5, paciente: "Nome do Paciente", medicamento: "Nome do Medicamento", horario: "08:00", status: "Administrado" },
    { id: 6, paciente: "Nome do Paciente", medicamento: "Nome do Medicamento", horario: "08:00", status: "Administrado" },
  ]);

  const alternarStatus = (id: number) => {
    setMedicamentos(medicamentos.map(item => 
      item.id === id ? { ...item, status: item.status === "Administrado" ? "Pendente" : "Administrado" } : item
    ));
  };

  return (
    <div className="pagina-lista">
      {/* CABEÇALHO (HEADER) IDENTICO AO FIGMA */}
      <header className="header-principal">
        <div className="header-container">
          <div className="logo-section">
            <span className="logo-texto">Logo</span>
          </div>
          <nav className="nav-section">
            <Link to="/cadastro" className="nav-link">
              <ClipboardList size={20} />
              Cadastros
            </Link>
            <button onClick={() => navigate('/login')} className="btn-sair">
              <LogOut size={18} />
              Sair
            </button>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="main-content">
        <div className="titulo-container">
          <h1>Lista de Medicações</h1>
          <button onClick={() => navigate('/cadastro')} className="btn-novo-cadastro">
            <PlusCircle size={20} />
            Novo Cadastro
          </button>
        </div>
        
        <div className="tabela-card">
          <table>
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Medicamento</th>
                <th>Horário</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {medicamentos.map((item) => (
                <tr key={item.id}>
                  <td>{item.paciente}</td>
                  <td>{item.medicamento}</td>
                  <td>{item.horario}</td>
                  <td>
                    <button 
                      className={`status-btn ${item.status.toLowerCase()}`}
                      onClick={() => alternarStatus(item.id)}
                    >
                      {item.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Lista;