import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/img/logo.svg";
import "./styles.css";
import { AuthContext } from "../../auth/Context";
import { useContext } from "react";

export default function Header() {
  const { token, role, logout } = useContext(AuthContext);
  const location = useLocation();

  const getLinkClassName = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="NavBar">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="nav-links">
        {role ?
          <>
            <Link to="/sobre" className={getLinkClassName("/sobre")}>Sobre</Link>
            <Link to="/felinos" className={getLinkClassName("/felinos")}>Felinos</Link>
            <Link to="/profile" className={getLinkClassName("/profile")}>Perfil</Link>
          </> : null}

        {role === "admin" ? <Link to="/users" className={getLinkClassName("/users")}>Usuários</Link> : null}
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
          <a className="btn-logout" onClick={logout}>
            Sair
          </a>
      )}
    </header>
  );
}
