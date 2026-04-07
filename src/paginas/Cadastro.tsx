import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <>
      <h1>Cadastro</h1>
      <br />
      <Link to="/Login">Vá para a página Login</Link>
      <br />
      <Link to="/lista">Vá para a página Lista</Link>
    </>
  );
}

export default Cadastro;