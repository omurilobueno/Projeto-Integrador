import { Link } from "react-router-dom";

function Lista() {
  return (
    <>
      <h1>Lista</h1>
      <br />
      <Link to="/login">Vá para a página Login</Link>
      <br />
      <Link to="/cadastro">Vá para a página Cadastro</Link>
    </>
  );
}

export default Lista;