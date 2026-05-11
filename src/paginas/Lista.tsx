import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LogOut, ClipboardList, Trash2, Search } from "lucide-react";
import logoImg from "../assets/logo.png"; 
import "../../style/style.css";

function Lista() {
  const navigate = useNavigate();
  const [medicamentos, setMedicamentos] = useState<any[]>([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const dados = localStorage.getItem("medicamentos");
    if (dados) {
      try {
        setMedicamentos(JSON.parse(dados));
      } catch (e) {
        setMedicamentos([]);
      }
    }
  }, []);

  const excluirItem = (id: any) => {
    if (window.confirm("Deseja excluir este registro?")) {
      const novaLista = medicamentos.filter(m => m.id !== id);
      setMedicamentos(novaLista);
      localStorage.setItem("medicamentos", JSON.stringify(novaLista));
    }
  };

  const filtrados = medicamentos.filter(m => 
    m?.paciente?.toLowerCase().includes(busca.toLowerCase()) ||
    m?.medicamento?.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="pagina-lista">
      <header className="header-principal">
        <div className="header-container">
          <Link to="/lista" className="logo-link">
            <img src={logoImg} alt="Medicine Time" className="logo-site" />
          </Link>
          <nav className="nav-section">
            <Link to="/cadastro" className="nav-link">
              <ClipboardList size={20} /> Cadastros
            </Link>
            <button onClick={() => navigate("/login")} className="btn-sair-header">
              <LogOut size={18} /> Sair
            </button>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="topo-lista">
          <h1>Lista de Medicações</h1>
        </div>

        <div className="busca-container">
          <div className="input-busca">
            <input 
              type="text" 
              placeholder="Pesquisar..." 
              value={busca} 
              onChange={(e) => setBusca(e.target.value)} 
            />
            <Search size={18} />
          </div>
        </div>

        <div className="tabela-card">
          <table>
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Medicamento</th>
                <th>Horário</th>
                <th style={{ textAlign: 'center' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtrados.length > 0 ? (
                filtrados.map((item) => (
                  <tr key={item.id}>
                    <td>{item.paciente}</td>
                    <td>{item.medicamento}</td>
                    <td>{item.horario}</td>
                    <td style={{ textAlign: 'center' }}>
                      <button className="btn-excluir-tabela" onClick={() => excluirItem(item.id)}>
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} style={{ textAlign: 'center', padding: '20px' }}>
                    Nenhum registro encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Lista;