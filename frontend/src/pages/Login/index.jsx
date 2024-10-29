import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../auth/Context";
import { toast } from "react-toastify";
import { login as loginUser } from "../../api/user";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBackClick = () => {
    navigate("/");
  };

  const handleRegisterClick = () => {
    navigate("/cadastro");
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!email || !password) {
        return toast("Informe o e-mail e a senha para continuar!");
      }
      const responseApi = await loginUser(email, password);
      if (responseApi.token) {
        login(responseApi.token);
        navigate("/");
      } else {
        // console.log(responseApi);
      }
    } catch (error) {
      console.log(error);
      if (error.status === 403) {
        return toast("Sem permissão.");
      }
      if (error.status === 401 || error.status === 404) {
        return toast("Email ou senha inválido, tente novamente!");
      }
      toast("Erro inesperado, tente novamente mais tarde!");
    }
  };

  return (
    <>
      <h2 className="Title-Login">Bem-vindo novamente</h2>

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>
              Não Possui conta?
              <span onClick={handleRegisterClick} className="register-link">
                Clique Aqui
              </span>
            </p>
          </div>

          <div className="btn-container">
            <button type="submit" onClick={handleSubmit} className="btn-entrar">
              ENTRAR
            </button>
            <button
              type="button"
              onClick={handleBackClick}
              className="btn-voltar"
            >
              VOLTAR
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
