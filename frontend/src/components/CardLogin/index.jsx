import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function CardLogin() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1); // Navega para a página anterior
  };

  return (
    <div className="card-login">
      <div className="login-inicio">
        <h2 className="login-title">Login</h2>
        <span className="login-detalhe"></span>
      </div>

      <form>
        <div className="label-input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            required
          />
        </div>

        <div className="btn-container">
          {" "}
          <button type="submit">ENTRAR</button>
          <button type="button" onClick={handleVoltar}>
            VOLTAR
          </button>{" "}
        </div>
      </form>
    </div>
  );
}
