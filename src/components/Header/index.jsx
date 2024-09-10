import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.svg";
// import Separador from "../../assets/img/separador-login.svg";
import "./styles.css";

export default function Header() {
  return (
    <header className="NavBar">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="nav-links">
        <Link to="/sobre">Sobre</Link>

        <Link to="/felinos">Felinos</Link>
      </div>
      <div>
        <Link to="/login" className="btn-entrar">
          Entrar
        </Link>
        <Link to="/cadastro" className="btn-cadastro">
          Cadastre-se
        </Link>
      </div>
    </header>
  );
}
