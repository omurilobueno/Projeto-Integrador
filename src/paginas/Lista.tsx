import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, ClipboardList, Search } from "lucide-react";
import "../../style/style.css";

function Lista() {
  const navigate = useNavigate();

  const [medicamentos, setMedicamentos] = useState([
    { id: 1, paciente: "Nome do Paciente", medicamento: "Nome do Medicamento", horario: "08:00", status: "Administrado" },
    { id: 2, paciente: "Nome do Paciente", medicamento: "Nome do Medicamento", horario: "08:00", status: "Administrado" },
    { id: 3, paciente: "Nome do Paciente", medicamento: "Nome do Medicamento", horario: "08:00", status: "Administrado" },
    { id: 4, paciente: "Nome do Paciente", medicamento: "Nome do Medicamento", horario: "08:00", status: "Administrado" },
    { id: 5, paciente: "Nome do Paciente", medicamento: "Nome do Medicamento", horario: "08:00", status: "Administrado" },
  ]);

  const [dataHora, setDataHora] = useState("");

  // ⏰ Atualiza o relógio em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      const agora = new Date();

      const data = agora.toLocaleDateString("pt-BR");
      const hora = agora.toLocaleTimeString("pt-BR");

      setDataHora(`${data} - ${hora}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const alternarStatus = (id: number) => {
    setMedicamentos(
      medicamentos.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                item.status === "Administrado"
                  ? "Pendente"
                  : "Administrado",
            }
          : item
      )
    );
  };

  return (
    <div className="pagina-lista">
      
      {/* HEADER */}
      <header className="header-principal">
        <div className="header-container">
          <span className="logo-texto">Logo</span>

          <nav className="nav-section">
            <Link to="/cadastro" className="nav-link">
              <ClipboardList size={20} />
              Cadastros
            </Link>

            <button onClick={() => navigate("/login")} className="btn-sair-header">
              <LogOut size={18} />
              Sair
            </button>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="main-content">

        {/* TOPO */}
        <div className="topo-lista">

          <h1>Lista de Medicações</h1>

          {/* RELÓGIO */}
          <div className="relogio">
            {dataHora}
          </div>

          {/* BUSCA */}
          <div className="busca-cadastro">
            <div className="input-busca">
              <input type="text" placeholder="Pesquisar Paciente" />
              <Search size={18} />
            </div>
          </div>

        </div>

        {/* TABELA */}
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