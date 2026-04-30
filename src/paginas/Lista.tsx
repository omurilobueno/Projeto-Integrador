import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, ClipboardList, Search, Trash2, Pencil } from "lucide-react";
import "../../style/style.css";

function Lista() {
  const navigate = useNavigate();
  const [medicamentos, setMedicamentos] = useState<any[]>([]);
  const [dataHora, setDataHora] = useState("");
  const [busca, setBusca] = useState("");

  // 📥 Carrega os dados salvos no navegador ao abrir a página
  useEffect(() => {
    const dadosSalvos = localStorage.getItem("medicamentos");
    if (dadosSalvos) {
      setMedicamentos(JSON.parse(dadosSalvos));
    }
  }, []);

  // ⏰ Atualiza o relógio a cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      const agora = new Date();
      setDataHora(`${agora.toLocaleDateString("pt-BR")} - ${agora.toLocaleTimeString("pt-BR")}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 🔄 Alterna entre "Pendente" e "Administrado"
  const alternarStatus = (id: number) => {
    const novaLista = medicamentos.map((item) =>
      item.id === id ? { ...item, status: item.status === "Administrado" ? "Pendente" : "Administrado" } : item
    );
    setMedicamentos(novaLista);
    localStorage.setItem("medicamentos", JSON.stringify(novaLista));
  };

  // 🗑️ Exclui um paciente da lista
  const excluirItem = (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir este paciente?")) {
      const novaLista = medicamentos.filter(item => item.id !== id);
      setMedicamentos(novaLista);
      localStorage.setItem("medicamentos", JSON.stringify(novaLista));
    }
  };

  // 💡 Lógica do Filtro de Busca
  const medicamentosFiltrados = medicamentos.filter((item) =>
    item.paciente.toLowerCase().includes(busca.toLowerCase()) ||
    item.medicamento.toLowerCase().includes(busca.toLowerCase())
  );

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

      {/* CONTEÚDO PRINCIPAL */}
      <main className="main-content">

        <div className="topo-lista">
          <h1>Lista de Medicações</h1>
          <div className="relogio">{dataHora}</div>
        </div>

        {/* BARRA DE PESQUISA */}
        <div className="busca-container">
          <div className="input-busca">
            <input 
              type="text" 
              placeholder="Pesquisar paciente ou medicamento..." 
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <Search size={18} />
          </div>
        </div>

        {/* TABELA DE DADOS */}
        <div className="tabela-card">
          <table>
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Medicamento</th>
                <th>Horário</th>
                <th>Status</th>
                <th style={{ textAlign: 'center' }}>Ações</th>
              </tr>
            </thead>

            <tbody>
              {medicamentosFiltrados.length > 0 ? (
                medicamentosFiltrados.map((item) => (
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
                    <td>
                      <div className="acoes-tabela">
                        {/* BOTÃO EDITAR (LÁPIS) */}
                        <button 
                          className="btn-editar-tabela"
                          onClick={() => navigate(`/cadastro/${item.id}`)}
                          title="Editar Paciente"
                        >
                          <Pencil size={18} />
                        </button>

                        {/* BOTÃO EXCLUIR (LIXEIRA) */}
                        <button 
                          className="btn-excluir-tabela"
                          onClick={() => excluirItem(item.id)}
                          title="Excluir Paciente"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: '30px', color: '#888' }}>
                    {busca ? "Nenhum resultado encontrado." : "Nenhum paciente cadastrado."}
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