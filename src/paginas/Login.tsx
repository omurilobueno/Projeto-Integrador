import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png"; // Certifique-se de que o nome do arquivo está correto
import "../index.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState("");

  function validarEmail(texto: string) {
    return texto.includes("@") && texto.includes(".");
  }

  function fazerLogin() {
    if (email === "" || senha === "") {
      setErro("Preencha todos os campos.");
      return;
    }

    if (!validarEmail(email)) {
      setErro("Digite um e-mail válido.");
      return;
    }

    if (senha.length < 6) {
      setErro("Senha muito curta.");
      return;
    }

    setErro("");
    navigate("/lista");
  }

  function apertouEnter(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      fazerLogin();
    }
  }

  return (
    <div className="container">
      <div className="left">
        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309"
          alt="Profissional de saúde"
        />
        <div className="left-overlay">
          <div className="left-badge">Sistema de Saúde</div>
          <h2 className="left-titulo">
            Cuidado com
            <br />
            quem importa.
          </h2>
          <p className="left-sub">
            Gerencie medicações com segurança e agilidade.
          </p>
        </div>
      </div>

      <div className="right">
        <div className="right-header">
          {/* AQUI ESTÁ A LOGO SUBSTITUINDO O TEXTO */}
          <div className="logo-container-login">
            <img src={logoImg} alt="Medicine Time Logo" className="logo-login-img" />
          </div>
        </div>

        <div className="right-body">
          <h2>Bem-vindo de volta</h2>
          <p>Acesse sua conta para continuar.</p>

          <label htmlFor="email">E-mail</label>
          <div className="input-wrapper">
            <span className="input-icone">✉</span>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={apertouEnter}
            />
          </div>

          <label htmlFor="senha">Senha</label>
          <div className="input-wrapper">
            <span className="input-icone">🔒</span>
            <input
              id="senha"
              type={mostrarSenha ? "text" : "password"}
              placeholder="Mínimo 6 caracteres"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              onKeyDown={apertouEnter}
            />
            <button
              type="button"
              className="btn-olho"
              onClick={() => setMostrarSenha(!mostrarSenha)}
            >
              {mostrarSenha ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          <div className="remember">
            <label className="remember-label">
              <input
                type="checkbox"
                checked={lembrar}
                onChange={(e) => setLembrar(e.target.checked)}
              />
              <span>Lembrar de mim</span>
            </label>
          </div>

          {erro && <p className="erro">⚠️ {erro}</p>}

          <button
            className="btn-login"
            onClick={fazerLogin}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;