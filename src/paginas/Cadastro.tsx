import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { User, IdCard, Pill, Clock, Save, List, LogOut } from "lucide-react";
import "../../style/style.css";

function Cadastro() {
  const { id } = useParams(); // Captura o ID da URL para saber se é edição
  const navigate = useNavigate();

  // Estados dos inputs
  const [paciente, setPaciente] = useState("");
  const [cpf, setCpf] = useState("");
  const [medicamento, setMedicamento] = useState("");
  const [horario, setHorario] = useState("");

  // 1. CARREGAR DADOS PARA EDIÇÃO
  useEffect(() => {
    if (id) {
      // Busca a lista atual no localStorage
      const listaSalva = JSON.parse(localStorage.getItem("medicamentos") || "[]");
      // Encontra o paciente pelo ID (convertendo id da URL para número)
      const pacienteParaEditar = listaSalva.find((item: any) => item.id === Number(id));

      if (pacienteParaEditar) {
        setPaciente(pacienteParaEditar.paciente);
        setCpf(pacienteParaEditar.cpf || "");
        setMedicamento(pacienteParaEditar.medicamento);
        setHorario(pacienteParaEditar.horario);
      }
    }
  }, [id]);

  // 2. SALVAR OU ATUALIZAR
  const manipularEnvio = (e: React.FormEvent) => {
    e.preventDefault();

    if (!paciente || !medicamento || !horario) {
      alert("Por favor, preencha o Nome, Medicamento e Horário.");
      return;
    }

    const listaAtual = JSON.parse(localStorage.getItem("medicamentos") || "[]");

    if (id) {
      // MODO EDIÇÃO: Mapeia a lista e substitui apenas o item com o ID correspondente
      const listaAtualizada = listaAtual.map((item: any) =>
        item.id === Number(id)
          ? { ...item, paciente, cpf, medicamento, horario }
          : item
      );
      localStorage.setItem("medicamentos", JSON.stringify(listaAtualizada));
      alert("Registro atualizado com sucesso!");
    } else {
      // MODO NOVO CADASTRO: Cria um novo objeto com ID único baseado no tempo
      const novoRegistro = {
        id: Date.now(),
        paciente,
        cpf,
        medicamento,
        horario,
        status: "Pendente",
      };
      localStorage.setItem("medicamentos", JSON.stringify([...listaAtual, novoRegistro]));
      alert("Paciente cadastrado com sucesso!");
    }

    navigate("/lista"); // Redireciona para a lista
  };

  return (
    <div className="app-cadastro">
      {/* HEADER DA PÁGINA */}
      <header className="header-cadastro">
        <div className="header-container">
          <span className="logo-cadastro">Logo</span>
          <nav className="menu-cadastro">
            <Link to="/lista" className="link-menu-lista">
              <List size={18} />
              Lista de Medicações
            </Link>
            <button className="btn-sair-simples" onClick={() => navigate("/login")}>
              <LogOut size={18} />
              Sair
            </button>
          </nav>
        </div>
      </header>

      {/* FORMULÁRIO DE CADASTRO/EDIÇÃO */}
      <main className="main-content">
        <div className="card-cadastro">
          <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#1e293b" }}>
            {id ? "📝 Editar Paciente" : "➕ Novo Cadastro"}
          </h2>

          <form onSubmit={manipularEnvio}>
            <h3 className="section-title">Dados do Paciente</h3>
            <div className="input-icon">
              <User size={18} />
              <input
                type="text"
                placeholder="Nome completo do paciente"
                value={paciente}
                onChange={(e) => setPaciente(e.target.value)}
              />
            </div>

            <div className="input-icon">
              <IdCard size={18} />
              <input
                type="text"
                placeholder="CPF (opcional)"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>

            <h3 className="section-title">Medicação e Horário</h3>
            <div className="input-icon">
              <Pill size={18} />
              <input
                type="text"
                placeholder="Nome do medicamento"
                value={medicamento}
                onChange={(e) => setMedicamento(e.target.value)}
              />
            </div>

            <div className="linha-cadastro">
              <div className="input-icon" style={{ flex: 1 }}>
                <Clock size={18} />
                <input
                  type="time"
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                />
              </div>
            </div>

            <div className="acoes-cadastro">
              <button type="submit" className="btn-salvar">
                <Save size={20} />
                {id ? "Salvar Alterações" : "Finalizar Cadastro"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Cadastro;