import "../index.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/lista");
  }

  return (
    <div className="container">
      <div className="left">
        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309"
          alt="imagem"
        />
      </div>

      <div className="right">
        <h2>Login</h2>
        <p>Se você já é membro, pode fazer login com seu e-mail e senha.</p>

        <label>E-mail</label>
        <input type="email" />

        <label>Senha</label>
        <input type="password" />

        <div className="remember">
          <input type="checkbox" />
          <span>Lembre de mim</span>
        </div>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;