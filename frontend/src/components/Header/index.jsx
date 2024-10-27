import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.svg";
// import Separador from "../../assets/img/separador-login.svg";
import "./styles.css";
import { AuthContext } from "../../auth/Context";
import { useContext } from "react";

export default function Header() {
  const { token, role, logout } = useContext(AuthContext);
  return (
    <header className="NavBar">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="nav-links">
        <Link to="/sobre">Sobre</Link>

        <Link to="/felinos">Felinos</Link>

        <Link to="/profile">Perfil</Link>

        {role === "admin" ? <Link to="/users">Usuários</Link> : null}
      </div>
      {!token ? (
        <div>
          <Link to="/login" className="btn-entrar">
            Entrar
          </Link>
          <Link to="/cadastro" className="btn-cadastro">
            Cadastre-se
          </Link>
        </div>
      ) : (
        <div>
          <button onClick={logout}>Sair</button>
        </div>
      )}
    </header>
  );
}
